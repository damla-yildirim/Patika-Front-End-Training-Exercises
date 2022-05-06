let price=100
let user="damla"
//koşul
//eşitse ==

console.log("== :", price==1)
console.log("== :", price==100)

//hem değeri hem türü eşite ===

console.log("=== :", price===1)
console.log("=== :", price==="100")

//eşit değilse !=

console.log(user!="guest")

//küçükse <

console.log(price<100)

//küçükse veya eşitse <=

console.log(price<=100)

//büyükse >

console.log(price>100)

//büyükse veya eşitse >=

console.log(price>=100)

//mantiksal
//&& ve

price=0
console.log(price>0 && user!="guest")

//|| veya

console.log(price>0 || user=="guest")

//! değil(tersi)

console.log(price>0 && !user=="damla")
