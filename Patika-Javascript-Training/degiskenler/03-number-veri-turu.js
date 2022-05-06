//number veri turu tanimlama

let price=100
let tax=0.18
let priceTax=price*tax
let total=price+priceTax
console.log(
    "KDV'siz Fiyat=", price,
    "KDV Oranı=",tax,
    "KDV Tutari=", priceTax,
    "Fiyat=", total
    )

//arttirma ve azaltma

let counter=320
counter=counter+1 //uzun yönt.
counter+=1; //kısa yönt.
counter++; //daha kısa yönt.
console.log(counter)

counter--;
console.log(counter)

counter*=10;
console.log(counter)

counter/=2;
console.log(counter)

//islem önceligi
console.log(2+3*10)//32 matematik kurallarında islem onceligi gecerli
console.log((2+3)*10)//50 ""

//mod alma

console.log(3%2)// kalan 1 -tek
console.log(14%2)//kalan 0-cift

    //ornek: 18 koliye 8 tane elma koyarsam kac tane urun elimde kalıyor

    console.log("Kolide kalan urun:", 18%8)

//us alma

console.log(2*2*2*2)// 2'nin 4. kuvveti -uzun
console.log(2**4)//2'nin 4. kuvveti -kısa ve pratik
console.log(5**6)//5'in 6. kuv.

//asagı yuvarlama yont.-->Math.floor:

console.log("Asagı yuvarlama 1.9=", Math.floor(1.9))

//yukarı yuvarlama yont. --> Math.ceil:

console.log("Yukarı yuvarlama 1.9=", Math.ceil(1.9))

//yakına yuvarlama yont. --> Math.round:

console.log("Yakına yuvarlama 1.9=", Math.round(1.5)) //1.5 ve ustu yukarı yuvarlanır

//stringe cevirme islemleri

let stringNumber="11"
console.log(stringNumber)
let newNumber=Number(stringNumber)
console.log(newNumber)

console.log("stringler siyah numberlar mavi renktedir:",Number("111"))




