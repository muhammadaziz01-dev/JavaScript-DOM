
let card = document.querySelector('.card');


card.style.cssText = `
border-radius: 5px;
background-color: silver;
width: 400px;
height: 400px;
border-radius: 65px;
pading: 20px;
margin: 50px auto;
border: 2px solid red;
display: flex;
align-items: center;
justify-content: space-between;

`
card.innerHTML= "<h1> HELLO DOM</h1>"
let h1 =card.firstElementChild;

h1.style.cssText="margin: auto; color: red"

card.parentElement.style.backgroundColor="lime"

















// console.log(card.style);

// Amaliy misolllar

// const student = [
//     {name: "Aziz" , percent : 96},
//     {name: "lola" , percent : 84},
//     {name: "sardor" , percent : 73},
//     {name: "Kamol" , percent : 79},
//     {name: "Bek" , percent : 83},
//     {name: "Jon" , percent : 77},
// ];

// let arr = student.filter((el) => el.percent >= 74 && el.percent <84);

// console.log(arr);



///----------------------------------------------

// 2- misol 

// const student = [
//     {name: "Aziz" , percent : 96},
//     {name: "lola" , percent : 84},
//     {name: "sardor" , percent : 73},
//     {name: "Kamol" , percent : 79},
//     {name: "Bek" , percent : 83},
//     {name: "Jon" , percent : 77},
// ];

// let arr = student.filter((el) => el.name.length >5);

// console.log(arr);