//Boolean 
//0 ve 1'ler

let isActive=false;//0
isActive=true;//1
console.log(isActive);

let userName;
let isUserName=Boolean(userName);
console.log(isUserName);

Boolean("11")//true
Boolean("")//false // Boş veriye false diyor.

userName="user"
console.log("var mı?",Boolean(userName))

//0, -0, null, false, NaN, undefined,("") ->

Boolean(0) //fal
Boolean(-0) //fals
Boolean(-0.1) //true
Boolean(0==0) //true
