console.log("Hello world");
// alert("Good morning");

// function alertMessage() {
//   alert("hello world");
// }

// alertMessage();

//arrow function
// var alertMessage = () => {
//   console.log("Lorem ipsum dolor sit amet");
// };

// alertMessage();

// hello = (message) => {
//   alert(message);
// };

// hello("kk aday olmasin");

// var currentYear = 2023;
// var yasHesapla = (dateYear) => {
//   return currentYear - dateYear;
// };

// console.log(yasHesapla(2000));

//faktöriyel hesaplama

// var faktoriyel = (number) => {
//   if (number < 1) {
//     alert("Negatif ve 0 sayisini giremezsiniz. Tekrar deneyiniz");
//   } else if (number == 1) {
//     return 1;
//   } else {
//     return number * faktoriyel(number - 1);
//   }
// };

// alert(faktoriyel(4));

function btn() {
  console.log("Kendine güven. Yapabilirsin");
}

// document.querySelector("h1").innerHTML = "ASLA YALNIZ YÜRÜMEYECEKSİN";

document.getElementsByClassName("header")[0].style.color = "red";
// document.querySelector(".header").style.backgroundColor = "blue";

// document.querySelector("#yazi").innerHTML = "Hello momy";
// document.getElementById("yazi").innerHTML = "Fenerbahce sampiyon";

// document.write("tayip gitsin");

document.querySelector("#ilkBtn").value = "hello click";

// var a = 40, b = 7;

// b = --a;
// b = a--;
// b = ++a;

// islem = --a + b--;
// console.log(b);
// console.log(islem);
// console.log(b);

var x = "10",
  y = "5";
// result = x / y;
// console.log(result);

console.log(typeof x);
x = parseInt(x);
console.log(typeof x);

var textDoldur = () => {
  document.querySelector("#input").value = "Focuslandi";
};

///////

// var name = prompt("İsminizi giriniz");
// alert(name);

//dikdörtgenin alani hesaplama

var kisaKenar = parseInt(prompt("Kısa kenar giriniz."));
var uzunKenar = parseInt(prompt("Uzun kenar giriniz."));

var alan = kisaKenar * uzunKenar;
console.log(typeof kisaKenar);
console.log(alan);
