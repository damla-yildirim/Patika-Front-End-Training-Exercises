//degisken tanımlama

var deneme1="globalde var ile tanimlanan degisken";

if(true){
    deneme1="var ile tanimlanan degiskenlere blocklardan erisilebilir";
} console.log(deneme1)

//fonksiyon tanımlayıp değişkene erişmek
/*function erisim(){
    var fonksiyondegisken="Bu degisken function scope da tanimlidir";
        if(true){
        var blockdegisken="Bu degisken blockta tanimlidir"
        fonksiyondegisken="Function erisim de ki tanımlı degiskenlere o fonksiyonun blocklarından erişilebilir."
        }
    console.log(blockdegisken);
}
erisim();
console.log(fonksiyondegisken);
console.log(blockdegisken);*/


//var tanımlama

var  weLove= "Kodluyoruz";
if(2>1) {
	var weLove = "Bootcamp";
	console.log(weLove)
}
console.log(weLove)  

//let
let okulNumarasi =  414;
if(true){
 let okulNumarasi =  245;
 console.log("Ilk blockta ki deger: "+okulNumarasi);
  if(true){
     let okulNumarasi = 312;
    console.log("Ikinci blockta ki deger: "+okulNumarasi);
     }
}
 console.log("Global scopeta ki deger: "+okulNumarasi);

 //const tanımlayıp değiştirmek

 /*const kullanici = {
    isim: "Ahmet",
   }
   kullanici.isim = "Dila";
   console.log(kullanici.isim);
   
   const dizi = [1,2,3];
   dizi = [1,2,3,4];*/

   //hoisting

   //1- Console ekraninda ne yazar inceleyelim. 
var myvar;
console.log(myvar); 
myvar = 'local value';

// yukarida ki ornegi adim adim aciklarsak
// var myvar = undefinded;
// console.log(myvar); 
// myvar = 'local value';
// seklinde oldugu icin console ekraninda undefined degerinini goruruz.

// 2- Console ekraninda ne yazar inceleyelim.
sayi1 = 100;
console.log(sayi1+" ve "+sayi2);;
var sayi2 = 200;
var sayi1;

//Adim adim gidelim
// var sayi 2 = undefined
// var sayi 1 = undefined
// sayi 1 = 100;
// console.log(sayi1+ " ve "+sayi2)
//sayi 2= 200;
// sonuc olarak console ekraninda henuz sayi 2 degerine deger atanmadigi icin "100 ve undefined" degerini goruruz