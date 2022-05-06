//css class ekleme, çıkarma

let greet=document.querySelector("#greeting")

greet.classList.add("text-primary")
greet.classList.add("title")//ekleme işlemleri
greet.classList.add("new-info","second-class")//birden fazla ekleme

greet.classList.remove("text-primary")//silme işlemi virgül konarak diğerleri de silinebilir

console.log(greet.classList)