###  1. 02. 2024

### DOM Events 

- **Events** -> Hodisa 

- **addEventListene()** -> hodisani kuzatib turish , bu o'ziga 3 ta qiymat oladi , lekin ko'pincha 2 ta qiymat beriladi . 1- qiymat sifatida o'ziga hodisa nomini oladi (click , dblclick ,....) , 2- qiymat sifatida esa biz kiritga hodisa yuz berganda bjarilishi kerak bo'lgan funcsiya qiymat sifatida olinadi .

<p>M :</p>

```
let modalWrapper = document.querySelector(".modal_wrapper"),
kirish=document.querySelector("#kirish"),
chiqish=document.querySelector("#chiqish");


kirish.addEventListener("click",()=>{
    modalWrapper.style.display = "block";
    document.body.style.overflow = "hidden";
})


chiqish.addEventListener("click",()=>{
    modalWrapper.style.display = "none";
    document.body.style.overflow = "visible";
});
```

### Mouse events

- **click**
- **dblclick**
- **mouseleave**
- **mousemove**
- **mousedown**
- **mouseleave**
- **mouseente**
- **mouseup**

1. - **click** -> mishkani tanlab olgan elamentimiz ustida 1 marotaba bosishlik hodisasi .

2. - **dblclick** -> mishkani tanlab olgan elamentimiz ustida 2 marotaba bosishlik hodisasi .

3. - **mouseleave** -> mishkani tanlab olgan elamentimiz ustiga olib borgandagi hpodisa .

4. - **mousemove** -> mishkani tanlab olgan elamentimiz ustidan olib qochkanimizda , yani boshqa joyga yo'naltirganimizda yuz beruvchi hodisa .

5. - **mouseleave** -> mishkani tanlab olgan elamentimiz ustida harakatlangan vaqti , bunda mishka tanlab olgan elamentimiz ustida qancha harakat qilsa kiritga funcsiyamiz shuncha marotaba ish bajaradi.

6.  - **mousedown** -> mishkani knopkasi bosilgandagi holat.

7.  - **mouseenter** -> ustiga borganda ishlaydi

6.  - **mouseup** -> mousedown ni  teskarisi.

### Keyboard events
- **keydown**
- **keypress**
- **keyup**

1. - **keydown** -> harbitta kno'pkani bosilishi .

2. - **keypress** -> ( keydown ) bilan birhil ishlaydi faqat bir marotaba bossganda gina ishlaydi.

3. - **keyup** -> bironbir tugmani bosib qo'yinb yubiorishligimiz bilan ishlaydi , va eng tez ishlaydigani ham shu hisoblanadi.

```
// event.target.velyu -> bu har bir hodisa yuz berganda nima bosilganligi haqida habar beruvchi yoki bo'lmasam aytishligimiz mumkun bironbir tugmachani yoki qandaydur elamentni bosganligimizda uning velyusini , qiymaini ko'rsatib beradi

```

```
// event.cod.js -> klavyaturadagi har bir kono'pkani o'z son (raqami) cod sifatida mavjut  jsda.

//event.ceyCode
```

### ceyCod :  ![Alt text](keycodes.png)


<hr>

#### DOM contene loadede -> Documentimizdagi (html) hamma narsa yuclanib bio'lgandan kegin ishlaydiga event.

#### Loaded -> Umumiy ' DOM 'degi narsalar yuklanish hodisasi

#### Resize -> hayitni kichrayib katayishdagi hodisa , vizni boshqarishdagi .

#### Scrole -> scrol 📜
<hr>
 
### setTimeout ( () => {} , 1000);  -> JavaScriptni o'zini funcsiyasi bo'lib , argument sifatida funcsiya va tayim (vaqit "1000 mls") kiritiladi .

### setInterval ( () => {} , 1000);

```
let loadWrapper = document.querySelector('.load_wrapper');

window.addEventListener('DOMContentLoaded',()=>{
    loadWrapper.style.display = 'flex';
    document.body.style.overflow="hidden";
});

window.addEventListener('load',()=>{

    setTimeout( ()=>{

        loadWrapper.style.display = 'none';
        document.body.style.overflow="visible";

    } , 2000)
  
});
```