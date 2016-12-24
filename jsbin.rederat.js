var operation = prompt("Which kind of operation would you like to perform(Addition, Subtraction, Multiplication, Division, Roots or Exponents)?");

/*functions that writes a prompt globally, ready for use as a definition
inside a function to ensure that the user is only prompted, when running the function*/
function addIntFunc() {
  if (operation === "Addition") {
    return prompt("Integer a, for additive calculation a + b");
  }
}

function addInt2Func() {
  if (operation === "Addition") {
    return prompt("Integer b, for additive calculation a + b");
  }
}

//function that runs a addition sequence
function addition() {
  var additiveInt = addIntFunc();
  var additiveInt2 = addInt2Func();
  var additionPerform = +additiveInt + +additiveInt2;
  
  if (operation === "Addition") {
    document.write("Addition(a+b):" + "<br \>" + "<br \>" + "a=" + additiveInt + "<br \>" + "b=" + additiveInt2);
    document.write("<br \>" + "<br \>" + "Sum=" + additiveInt + " " + "+" + " " + additiveInt2 + " " + "=" + " " + additionPerform);
  }
}

//running addition function id conditions are met
addition();

//____________________________________________________________________________
//____________________________________________________________________________

/*functions that writes a prompt globally, ready for use as a definition
inside a function to ensure that the user is only prompted, when running the function*/
function multIntFunc() {
  if (operation === "Multiplication") {
    return prompt("Integer a, for multiplication a * b");
  }
}

function multInt2Func() {
  if (operation === "Multiplication") {
    return prompt("Integer b, for multiplication a * b");
  }
}

//function that runs a addition sequence
function multiplication() {
  var multInt = multIntFunc();
  var multInt2 = multInt2Func();
  var multPerform = +multInt * +multInt2;
  
  if (operation === "Multiplication") {
    document.write("Multiplication(a*b):" + "<br \>" + "<br \>" + "a=" + multInt + "<br \>" + "b=" + multInt2);
    document.write("<br \>" + "<br \>" + "Product=" + multInt + " " + "*" + " " + multInt2 + " " + "=" + " " + multPerform);
  }
}

multiplication();

//____________________________________________________________________________
//____________________________________________________________________________

/*functions that writes a prompt globally, ready for use as a definition
inside a function to ensure that the user is only prompted, when running the function*/
function subIntFunc() {
  if (operation === "Subtraction") {
    return prompt("Integer a, for subtraction a - b");
  }
}

function subInt2Func() {
  if (operation === "Subtraction") {
    return prompt("Integer b, for subtraction a - b");
  }
}

//function that runs a addition sequence
function subtraction() {
  var subInt = subIntFunc();
  var subInt2 = subInt2Func();
  var subPerform = +subInt -subInt2;
  
  if (operation === "Subtraction") {
    document.write("Subtraction(a-b):" + "<br \>" + "<br \>" + "a=" + subInt + "<br \>" + "b=" + subInt2);
    document.write("<br \>" + "<br \>" + "Product=" + subInt + " " + "-" + " " + subInt2 + " " + "=" + " " + subPerform);
  }
}

subtraction();

//____________________________________________________________________________
//____________________________________________________________________________

/*functions that writes a prompt globally, ready for use as a definition
inside a function to ensure that the user is only prompted, when running the function*/
function divIntFunc() {
  if (operation === "Division") {
    return prompt("Integer a, for division a / b");
  }
}

function divInt2Func() {
  if (operation === "Division") {
    return prompt("Integer b, for subtraction a / b");
  }
}

//function that runs a addition sequence
function division() {
  var divInt = divIntFunc();
  var divInt2 = divInt2Func();
  var divPerform = +divInt / divInt2;
  
  if (operation === "Division") {
    document.write("Division(a/b):" + "<br \>" + "<br \>" + "a=" + divInt + "<br \>" + "b=" + divInt2);
    document.write("<br \>" + "<br \>" + "Product=" + divInt + " " + "/" + " " + divInt2 + " " + "=" + " " + divPerform);
  }
}

division();

//____________________________________________________________________________
//____________________________________________________________________________

/*functions that writes a prompt globally, ready for use as a definition
inside a function to ensure that the user is only prompted, when running the function*/
function expIntFunc() {
  if (operation === "Exponent") {
    return prompt("Integer a, for exponential a^b");
  }
}

function expInt2Func() {
  if (operation === "Exponent") {
    return prompt("Integer b, for exponential a^b");
  }
}

//function that runs a addition sequence
function exponential() {
  var expInt = expIntFunc();
  var expInt2 = expInt2Func();
  var expPerform = Math.pow(expInt, expInt2);
  
  if (operation === "Exponent") {
    document.write("Exponential(a^b):" + "<br \>" + "<br \>" + "a=" + expInt + "<br \>" + "b=" + expInt2);
    document.write("<br \>" + "<br \>" + "Product=" + expInt + "^" + expInt2 + " " + "=" + " " + expPerform);
  }
}

exponential();

//____________________________________________________________________________
//____________________________________________________________________________

/*functions that writes a prompt globally, ready for use as a definition
inside a function to ensure that the user is only prompted, when running the function*/
function sqrIntFunc() {
  if (operation === "Root") {
    return prompt("Integer a, for root a^sqrt(b)");
  }
}

function sqrInt2Func() {
  if (operation === "Root") {
    return prompt("Integer b, for root a^sqrt(b)");
  }
}

//function that runs a addition sequence
function root() {
  var sqrInt = sqrIntFunc();
  var sqrInt2 = sqrInt2Func();
  var sqrPerform = Math.pow(sqrInt2, 1/sqrInt);
  
  if (operation === "Root") {
    document.write("Root(a^sqrt(b)):" + "<br \>" + "<br \>" + "a=" + sqrInt + "<br \>" + "b=" + sqrInt2);
    document.write("<br \>" + "<br \>" + "Product=" + sqrInt + " " + "^sqrt" + " " + sqrInt2 + " " + "=" + " " + sqrPerform);
  }
}

root();