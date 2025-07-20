const globalVariable = "This is a global variable";

function myFunction() {
  const localVariable = "This is a local variable";
  console.log(globalVariable);
  console.log(localVariable);
}

myFunction();
