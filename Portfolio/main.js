var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); 
elem.innerHTML = x;     
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };          
  
  // JavaScript kodlari
document.getElementById('rangOzgartir').addEventListener('click', function() {
  // Rang o'zgartirish uchun kerakli kodlar
  let ranglar = ['qora', 'oq'];
  let buttonElement = document.getElementById('rangOzgartir');

  // Joriy rangni aniqlash
  let joriyRang = buttonElement.style.backgroundColor || window.getComputedStyle(buttonElement).backgroundColor;

  // Joriy rangni indeksini topish
  let indeks = ranglar.indexOf(joriyRang);

  // Yangi rangni o'rnating
  indeks = (indeks + 1) % ranglar.length;

  // Yangi rangni qo'yish
  buttonElement.style.backgroundColor = ranglar[indeks];
});

// Tarjima funksiyasi
function tarjima(qator, til) {
  // Bu joyda siz tilni almashtirish logikasini yozishingiz kerak
  // Masalan, API orqali tarjima qilishingiz mumkin
  // Mana shu joyda API-ni chaqirish misoli
  // Bu faqat misol, aslida siz boshqa usullarni ham ishlatingiz mumkin
  // Masalan, lokal fayllar orqali tarjima qilish
  // yoki saytdan ma'lumot olish
  // Bu yerda tilni o'zgartirish funksiyasini ishlataylik
  let tarjimaNatija = "";

  // API-ni chaqiramiz yoki boshqa usul orqali tilni almashtiramiz
  // Bu faqat misol, siz o'zingiz API-ni qo'shishingiz kerak
  // Misol uchun API manzili va so'rovnoma kerak bo'ladi
  // let apiUrl = "https://api.example.com/tarjima";
  // let response = makeApiRequest(apiUrl, { qator, til });

  // Keyingi qismni API-ni chaqirishga moslashtiring
  // Yuqoridagi qismni o'zgartirish uchun kerak bo'ladi
  // Agar API-ni ishlatsangiz, uni javobini olish uchun kerak bo'ladi
  // let javob = response.json();

  // Javobni olishni boshqarish uchun o'zingizni talablarizga muvofiq kod yozing
  // Bu faqat misol
  // if (javob.success) {
  //     tarjimaNatija = javob.result;
  // } else {
  //     tarjimaNatija = "Tarjima amalga oshmadi";
  // }

  // Agar siz boshqa tilni o'zgartirish usulini ishlatsangiz, uni yozing

  return tarjimaNatija;
}

// Tarjima qilmoqchi bo'lgan matn
let matn = "Hello, world!";
// Tarjima qilmoqchi bo'lgan til
let til = "uzbek";

// Tarjima funksiyasini chaqirish
let natija = tarjima(matn, til);

// Tarjima natijasini konsolga chiqarish
console.log(natija);

// API manzili
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

// Fetch funktsiyasi orqali API ga so'rov jo'natish
fetch(apiUrl)
  .then(response => {
    // HTTP statusni tekshirish
    if (!response.ok) {
      throw new Error(`HTTP xato: ${response.status}`);
    }
    // JSON formatda javobni qaytarish
    return response.json();
  })
  .then(data => {
    // Ma'lumotlarni olish
    console.log('API javobi:', data);
    // Ma'lumotlarni ishlatishingiz mumkin
  })
  .catch(error => {
    // Xatolarni aniqlash va xabar chiqarish
    console.error('Xatolik yuz berdi:', error.message);
  });

  let element = document.getElementById('elementId');
// Elementning matnini o'zgartirish
element.innerHTML = 'Yangi matn';

console.log('Bu xabar console-da chiqadi');

// Funksiya yaratish
function salom(name) {
  return 'Salom, ' + name + '!';
}
// Funksiyani chaqirish
let salomMatni = salom('Dunyo');
console.log(salomMatni);

// Foydalanuvchidan ma'lumot olish
let ism = prompt('Ismingizni kiriting:');
// Foydalanuvchi ismini chiqarish
alert('Salom, ' + ism + '!');

// Interval orqali har bir sekundda bir narsani bajaramiz
setInterval(function() {
  console.log('Narsa');
}, 1000);

// Timeout orqali bir marotaba narsani bajaramiz
setTimeout(function() {
  console.log('Bir marta');
}, 5000);
// Elementni animatsiyalash
let animatsiyaElementi = document.getElementById('animatsiyaId');
animatsiyaElementi.style.transition = 'all 2s'; // 2 sekundga o'tish
animatsiyaElementi.style.opacity = 0; // Opasitetni o'zgartirish
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  // Nodemailer yordamida emailni yuborish
  // Bu joyda email yuborish uchun SMTP serveri haqida ma'lumotlarni sozlash kerak
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Salom, dunyo!\n');
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Server http://${HOST}:${PORT}/ da ishlayapti`);
});

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {myFunction(this);}
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
print
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
const x = 5;
const y = 6;
const z = x + y;
const price1 = 5;
const price2 = 6;
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
