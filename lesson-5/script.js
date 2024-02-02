// let arr = [
//     {
//         name: "Ibrohim",
//         age: "21",
//     },
//     {
//         name: "Jamshid",
//         age: "24",
//     },
//     {
//         name: "Otabek",
//         age: "22",
//     },
//     {
//         name: "Johon",
//         age: "14",
//     },
//     {
//         name: "Akrom",
//         age: "11",
//     },
// ];

// let resalt = arr.sort((a,b)=>  b.age - a.age );
// console.log(resalt);

//-------------------------------------------------------------

// 2-misol

let products = [
    {
      id: 6,
      name: "Smarthpone",
      price: 12000,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 2,
      name: "Acer",
      price: 10000,
      rating: 4.3,
      discount: 10,
    },
    {
      id: 1,
      name: "Mac book",
      price: 17000,
      rating: 4.7,
      discount: 40,
    },
    {
      id: 4,
      name: "HP",
      price: 21000,
      rating: 4.1,
      discount: 30,
    },
    {
      id: 5,
      name: "Dell",
      price: 35000,
      rating: 4.9,
      discount: 30,
    },
  ];
  
products.filter((el) => {
    if(el.id === 4){
        products.pop(el);
    }
});



