//daha kısa fonksiyon yazmamızın sağlıyor
function hello(name){
    console.log(`Merhaba ${name}`)
}
hello("JS") 

const helloFunc1=(name) =>{console.log(`Merhaba ${name}`)}
helloFunc1("1")

const helloFunc2=name =>console.log(`Merhaba ${name}`)
helloFunc2("2")//tek parametrede paranteze gerek yok

const helloFunc3=(name, lastname) =>
console.log(`Merhaba ${name} ${lastname}`)

helloFunc3("3","lastnameinfo")// eğer birden fazla parametre alırsa bu şekilde parametreler () içinde olur

const helloFunc4=(name, lastname) =>{//birden fazla parametre ve birden fazla işlem var birden fazla parametre {} içinde
let info = `Merhaba ${name} ${lastname}`
console.log(info)
return info
}

helloFunc4("4","lastnameinfo")