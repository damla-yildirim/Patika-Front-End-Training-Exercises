//listenin son elemana ulaşma, ekleme
let lastchild=document.querySelector("ul#list>li:last-child")
lastchild.innerHTML="değiştirme yap"

let firstchild=document.querySelector("ul#list>li:first-child")
firstchild.innerHTML="ilkinde değiştirme yap"

//mevcut listede değiştirmeler yaptık
//ekleme
let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li')

liDOM.innerHTML="Yeni öge"

//ulDOM.append(liDOM)//en sona
ulDOM.prepend(liDOM)//en başa