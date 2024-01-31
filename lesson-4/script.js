"use strict";

let wrapper=document.querySelector('.card-wrapper');


for(let i=0; i<data.length; i++){

    let card=document.createElement('div');

    card.classList.add('card');

    card.innerHTML=`

    <img src="${data[i].image}" alt="product" class ="imgs">
    <div class="card-body">

         <h5 class="card-title ${data[i].isActive ? '' : 'notOnsale'}">${data[i].name}</h5>

         <p><strong>Price:</strong> ${data[i].price} $</p>
        
         <ul>
            <li>memory: ${data[i].memory}GB</li>
            <li>brand:${data[i].brand}</li>
            <li><span class="circle" style="background:${data[i].color}"></span> </li>
        </ul>
    </div>
    <button class="btn btn-primary" >
            add to cart
    </button> 
    
    `;

    wrapper.append(card);

}