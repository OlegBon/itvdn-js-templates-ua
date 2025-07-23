// Скрипт, який запускає вебворкер для обчислення простих чисел в заданому діапазоні
const elements = {
  form: document.querySelector("#numberForm"),
  start: document.querySelector("#start"),
  end: document.querySelector("#end"),
  result: document.querySelector("#result"),
};

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const start = parseInt(elements.start.value);
  const end = parseInt(elements.end.value);

  if (isNaN(start) || isNaN(end)) {
    elements.result.textContent = "Будь ласка, введіть коректні числа.";
    return;
  }

  const worker = new Worker("006-02_worker.js");
  worker.postMessage({ start, end });
  console.log("Обчислення запущено в окремому потоці (Web Worker)");

  elements.result.textContent = "Обчислення простих чисел...";

  worker.onmessage = (event) => {
    const primes = event.data;
    console.log(
      "Вебворкер завершив роботу та повернув результат в головний потік."
    );
    elements.result.textContent = `Прості числа в діапазоні ${start} до ${end}: ${primes.join(
      ", "
    )}`;
    worker.terminate(); // завершуємо роботу воркера після завершення
  };
});
