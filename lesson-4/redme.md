###  31. 01. 2024

###  Dynamicolly DOM monupulating

 - createElement(tegName);
 - appennd();
 - prepend();
 - after();
 - before();


 1. **createElement(tegName)** -> bizga yangi html elament qurib beradi .

 ```
 let div = document.createElement(div);

 // natija -> <div></div>
 ``` 

 2. **appennd()** -> yaratgan elamentimizni tanlab olgan elamentimiz ichiga joylashtirib beradi , joylashtirishda elamentimizni ohiridan joylashtiradi.

 ```
let wrapper =document.querySelector('.wrapper');
let card = document.createElement('div');

wrapper.append(card);
 ```

 3. **prepend()** -> yaratgan elamentimizni tanlab olgan elamentimiz ichiga joylashtirib beradi , huddi 'appennd()' singari farqi bunda joylashtirishda elamentimiz boshidan  joylashtiradi, ikkisini bir vaqitda ishlatilmaydi .

  ```
 let wrapper =document.querySelector('.wrapper');
  let card = document.createElement('div');

  wrapper.prepend(card);
 ```
 
 4. **after()** -> yaratgan elamentimizni tanlab olgan elamentimizni pasidan qo'shib beradi.

 
  ```
   let wrapper=document.querySelector('.wrapper');
   let card = document.createElement('div');

   wrapper.after(card);
  ```

5 . **before()** -> yaratgan elamentimizni tanlab olgan elamentimizni yuqorisidan qo'shib beradi.

    ```
    let wrapper =document.querySelector('.wrapper');
    let card = document.createElement('div');

    wrapper.before(card);
    ```