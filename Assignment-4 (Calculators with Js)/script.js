var name = prompt("Enter Your Name");
alert(name);
console.log(name);
// <br> stand for line-brake tag.
document.writeln("Welcome  " + name + "<br>"); 

var b = prompt(
  // \n stand for next line in Js
  "Which calculator you want?\n" + 
  // \n stand for next line in Js
  "1 = BMI\n" +  
  // \n stand for next line in Js
  "2 = BMR\n" +
  // \n stand for next line in Js
  "3 = Zakat\n" +
  // \n stand for next line in Js
  "4 = Ushr"
);

// if-condition
if (b == "1") {
    BMI();
}
// else if-condition
else if (b == "2") {
    BMR();
}
// else if-condition
else if (b == "3") {
    Zakat();
}
// else if-condition
else if (b == "4") {
    Ushr();
}
// else condition
else {
    alert("Invalid Choice");
}



// BMI (Body Mass Index) Formula
function BMI() {
    let a = prompt("Enter your Weight");
    let b = prompt("Enter your Height");
    c = a / b ** 2 ;
    alert(c);
    console.log(c);
    document.writeln("Your BMI value is " + c);
}

// BMR (Basal Metabolic Rate) Formula
function BMR() {
    let a = Number(prompt("Enter your Weight"));
    let b = Number(prompt("Enter your Age"));
    let c = Number(prompt("Enter your height"));
    d = (10 * a) + (6.25 * c) - (5 * b) + 5 + "calories/day";
    alert(d);
    console.log(d);
    document.writeln("Your BMR value is " + d);
}

// Zakat Formula:
function Zakat() {
    let a = prompt("Enter your Total Zakatable Amount");
    c = a * 0.025 + "PKR" ;
    alert(c);
    console.log(c);
    document.writeln("Your Zakat value is " + c);
}

// Ushr Calculator
function Ushr() {
    let a = prompt("Enter your Total Fasal");
    c = a * 0.10 + "PKR Ushr" ;
    alert(c);
    console.log(c);
    document.writeln("Your Ushr value is " + c);
}













