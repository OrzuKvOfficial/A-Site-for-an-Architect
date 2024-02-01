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