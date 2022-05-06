/*Fonksiyonlara Parametre Atamak Fonksiyondan Geri Dönüş Almak*/

/*Temel Kurallar
1-Bir fonksiyondan bir veya birden fazla parametre alabilir ya da hiç almayabilir
2-Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir
3-Fonksiyonun bağımlılıklarının azalması gerekir */

let firstName="Lorem"

function greetings(firstName="", lastName=""){ //default parametre alıyor
    //console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
}
console.log(firstName) // değişken
greetings("elma","armut") // fonksiyona parametre gönderdik

function greetings2(firstName, lastName){
    let info=`Merhaba ${firstName} ${lastName}`
    return info
}
greetings2("ad","soyad")//yazmadı
let greetinginfo=greetings2("ad","soyad")
console.log(greetinginfo)

function domIdWriteInfo(id, info){
    let domobjects=document.querySelector(`#${id}`) //id'yi değişkene tanımladık
    domobjects.innerHTML=info //id'ye infoyu gönderdik
}

let htmlinfo=`<span style="color:red">Kırmızıı</span>`

domIdWriteInfo('greeting',htmlinfo)