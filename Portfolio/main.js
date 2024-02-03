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