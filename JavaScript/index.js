// console.log("This is me Jawad");
// console.log("How are You");

// window.alert("I'm Fine.");


// A Variable is continer for storing the data
// two steps 
// 1. Declertaion (Var, Let Conts)
// 2. Assigment (=)

/*let age = 5; //integer data type
let firstName = "Jawad"; // string data type
let student = true // boolean data type

age = age + 1;
console.log(age);
console.log(firstName);
console.log(student);


// If we want to chage inner html of the content

document.getElementById("p1").innerHTML = "Hello" + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";*/


// let username = window.prompt("What's your name?");
// console.log(username);

// another way

let username;
document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);

}