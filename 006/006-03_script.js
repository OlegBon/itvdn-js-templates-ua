// Скрипт, який запускає вебворкер для обчислення простих чисел в заданому діапазоні
const elements = {
  form: document.querySelector("#numberForm"),
  start: document.querySelector("#start"),
  end: document.querySelector("#end"),
  status: document.querySelector("#statusText"),
  list: document.querySelector("#myList"),
};

let intervalId = null;
let worker = null;

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const start = parseInt(elements.start.value);
  const end = parseInt(elements.end.value);

  if (isNaN(start) || isNaN(end)) {
    elements.result.textContent = "Будь ласка, введіть коректні числа.";
    return;
  }

  // Очистити попередній інтервал і воркер
  if (intervalId) clearInterval(intervalId);
  if (worker) worker.terminate();

  worker = new Worker("006-03_worker.js");
  elements.status.textContent = "Обчислення простих чисел...";

  const resultText = document.querySelector("#resultText");

  worker.onmessage = (event) => {
    const primes = event.data;
    elements.list.innerHTML = "";

    elements.status.textContent = `Прості числа від ${start} до ${end}:`;

    primes.forEach((prime) => {
      const li = document.createElement("li");
      li.textContent = prime;
      elements.list.appendChild(li);
    });

    console.log("Вебворкер завершив роботу.");
    console.log("Прості числа:", primes);
  };

  worker.onerror = (err) => {
    console.error("Помилка у воркері:", err.message);
    elements.result.textContent = "Помилка під час обчислень.";
  };

  // Викликаємо воркер кожні 5 секунд
  // intervalId = setInterval(() => {
  //   worker.postMessage({ start, end });
  // }, 5000);

  // Запускаємо воркер одразу після створення
  setTimeout(() => {
    worker.postMessage({ start, end });
  }, 5000);
});
