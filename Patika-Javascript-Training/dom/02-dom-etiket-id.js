//let h2=document.getElementsByTagName('h2');
let title = document.getElementById('title')
title.innerHTML="Degisen bilgi"
console.log(title.innerHTML)

//querySelector 1 tane seçer
let link=document.querySelector("ul#list>li>a")
link.innerHTML+=" degisti"
link.style.color="red"
link.classList.add('btn')
