//var ile degisken tanimlama
var serverName="kodluyoruz.org"
console.log(serverName)

//boş değişken tanımlama
let bosdegisken;
console.log(bosdegisken)

//değişkene bilgi atama
bosdegisken="artık dolu"
console.log(bosdegisken)

//değişken atamadan önce kullanmaya çalışmak
/*satırları sırasıyla okur, önce değişken atanmalıdır*/

let name="Damla"
console.log(name)

//değişkene başka değer atama, bilgi değiştirme

name="Yeni bir ad"
console.log(name)

//birleştirme ve ekleme

name= name + " ekledim :)"
name= "şimdi "+name
console.log(name)

/*
name="sıfırla"
name+="ve yeni ad ekle"
console.log(name)
*/

//const ile boş değer atanamıyor, sabit değişken tanımlama

const SERVER_PASSWORD="1234"
console.log(SERVER_PASSWORD)