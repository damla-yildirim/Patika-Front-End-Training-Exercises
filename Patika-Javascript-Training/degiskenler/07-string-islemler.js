//String Veri Türü İşlemleri

let mail="damla@gmail.com"
let finame="damla"
let lastname="Yıldırım"

//karakter sayısı
console.log(mail.length);

//ilk karakter (0'dan başlar)

console.log(finame[0])
console.log(finame.charAt(0))

//büyük ve küçük harf
finame=finame.toUpperCase()
console.log(finame); //BÜYÜLT

finame=finame.toLowerCase()
console.log(finame) //küçült

//Stringde istedğimiz bilgiyi aratmak ve yerini bulmak : search

console.log(mail.search("@"))
console.log(mail[5])
console.log(mail.search("X")) //olmayan karakteri aratırsan -1 gelir

//belli yere kadar alma: slice

let domain= mail.slice(mail.search("@")+1)
console.log(domain)
/*let domain= mail.slice(mail.search("@") +1) //@ almadan yazdık
console.log(domain)*/
console.log(domain.slice(0,5)) //ya da
console.log(domain.slice(0, domain.indexOf("."))) //indexof kullandık

//bilgiyi değiştirme : replace

mail=mail.replace('gmail.com', 'kodluyoruz.org')
console.log(mail)

//istenilen bilgi var mı : includes
console.log(mail.includes('@'))//true
console.log(mail.includes('x'))
console.log(mail.search('@'))//5

//istenilen bilgiyle başlayıp bittiğini bulma : startWidth, endsWidth

console.log(mail.endsWith('@'))//false
console.log(mail.endsWith('.org'))//true

//ilk harflerini büyük yapmak

let fullname=`${finame[0].toLocaleUpperCase()}${finame.slice(1).toLowerCase()} ${lastname[0].toLocaleUpperCase()}${lastname.slice(1).toLowerCase()}`
console.log(fullname)

