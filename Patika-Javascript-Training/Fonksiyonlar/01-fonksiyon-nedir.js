//fonksiyon tanımlamak
function hello(){
    console.log("Merhaba")
    helloworld()
}

function helloworld(){
    console.log("Hello World")
}

hello() //fonksiyonu çağırma

var yas=19;
function userCheck(userName){
    if(yas>=18)
    console.log("Ehliyet alabilirsin")
    else{console.log("Ehliyet alamazsın")}
}
userCheck()