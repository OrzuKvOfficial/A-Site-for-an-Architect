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
