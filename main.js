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

// var x = "10",
//   y = "5";
// result = x / y;
// console.log(result);

// console.log(typeof x);
// x = parseInt(x);
// console.log(typeof x);

// var textDoldur = () => {
//   document.querySelector("#input").value = "Focuslandi";
// };

///////

// var name = prompt("İsminizi giriniz");
// alert(name);

//dikdörtgenin alani hesaplama

// var kisaKenar = parseInt(prompt("Kısa kenar giriniz."));
// var uzunKenar = parseInt(prompt("Uzun kenar giriniz."));

// var alan = kisaKenar * uzunKenar;
// console.log(typeof kisaKenar);
// console.log(alan);

//arrays

const names = ["Samet", "Elif", "Asel", "Rümeysa", 21, 2500.0];

console.log(names);

// console.log(names[0]);

// names.splice(0, 3); //silme işlemi

// console.log(names);

//names.push("Sema"); //dizinin sonuna eleman ekler
// console.log(names);

//names.pop(); //dizinin son elemanını siler
// console.log(names);

// var newNames = names.slice(2, 4);
// console.log(newNames);

// console.log(typeof names);
// console.log(names.length);

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// names.forEach((name, index) => {
//   console.log(index + ". index deki eleman " + name);
// });

var number = [40, 20, 3, 10, 31, 62];
// var sayi = new Array(4);
// sayi[0] = 1;
// sayi[1] = 2;
// sayi[2] = 3;
// sayi[3] = 4;
// sayi[4] = 5;
// sayi[5] = 5;

// console.log(sayi);

console.log(typeof number);
// console.log(Array.isArray(number))   //number degiskeni array mi (true or false)

console.log(number.sort());

//objects

// const person = {
//   firstName : "Samet",
//   lastName  : "Ertürk",
//   age : 18
// };

// console.log(person);
// console.log(person.firstName);
