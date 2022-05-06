let fullname=prompt("isim")

/*console.log(fullname)*/

let greeting = document.querySelector("#greeting")

greeting.innerHTML=`${greeting.innerHTML} <small>${fullname}</small>`