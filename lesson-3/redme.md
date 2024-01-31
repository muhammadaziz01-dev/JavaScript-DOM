### 30.01.2024

- **element.style.cssText** -> foydalangan holda js orqali elamentimizga istakgancha stillarni yozishligimiz mumkun , bunda agr (" " , ' ') qo'shtirnoq va birtirnoqni ichida yozadigan bo'lsak 1 qatorda yozishligimiz kerak agar (` `) bektik ichida yozadigan bo'lsak ancha tartipli ko'rinishda yozishlik imkoni mavjut. 

### JavaScript orqali tanlab olgan elamentlarimizni vizini aniqlash 

1.  .clientWidth
2.  .clientHeeight
3.  .offsetHeeight
4.  .offseWidht
6.  .scrolHeeight
7.  .offsetTop
8.  .offsetLeft
 <hr>

 - **element.clientWidth** - tanlab olgan elamentimiz Width aniqlab beradi bunda borderlar hisomlanmaydi misol tariqasida cardni olsak uni borderi , margin lar hisonlanmastan  Width o'lchab beradi va bizga number qaytaradi. 

 - **element.clientHeeight** - elamentimiz balandligini o'lchab beradi huddi element.clientWidth singari

 - **element.offseWidht** - elamentimizni obshi Width olchab beradi bunda peding , border , scrol bo'lsa ularniham hisoblab beradi va bu ham number qaytaradi.

  - **element.offsetHeeight** - elamentimiz  obshi balandligini o'lchab beradi huddi element.offseWidht singari.

  - **element.scrolHeeight** - elamentimiz  skroli bo'lsa shunin o'lchab beradi .

- **element.offsetTop** - elamentimizni tepadan qancha joy bo'lsa shuni o'lchab beradi.

- **element.offsetLeft** - elamentimizni chaptan (leftan) qancha joy bo'lsa shuni o'lchab beradi.

<hr>

### JavaScripta elament atributlari bilan ishlashlik.

1. getAttribute("");
2. setAttribute("" , "");
1. hasAttribute("");

- **elament.getAttribute("");** - bunda kiritgan elament atribut velyusini olib beradi .

- **elament.setAttribute("","");** - bunda metod oz'ziga ikkita qiymat oladi birinchisi o'zgartirmoqchi bo'lgan atributimiz , ikkinchiqiymat sifatida nimga o'zgartirmoqchi bo'lsak shuni yozamiz.

- **elament.hasAttribute("");** - bunda kiritgan elament atribut tekshiradi bo'lsa true aks holda false qiymat qaytaradi .
<hr>

### JavaScrip da classlar bilan islashlik 

1. className
2. classList

- **elament.className** - bu elamentimiz class nomini olib beradi .

- **elament.classList** - bu bizga lamentimizdagi class larni ro'yhatini array "[ ]" ko'rinishida olib beradi va ozini metodlariga ega ular .  

   - .add()
   - .remove()
   - .contains()
   - .toggle()

     - **elament.classList.add("")** - bu elament classiga kiritga classimizni ko'shadi .

      - **elament.classList.remove("")** - bu elament classlari ichidan kiritgan classimizni o'chiradi  .

       - **elament.classList.contans("")** - bu elament ichida biz kiritgan class bo'lsa true aks holda false qiymat qaytaradi.

        - **elament.classList.toggle("")** - bu biz kiritgan classimiz elamentlar classi ichida bo'lsa o'chiradi , agar yoq bo'lsa qo'shadi.