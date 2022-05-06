let user = {userName:"damlayildirim", isActive:true}

localStorage.setItem('userInfo',JSON.stringify(user)) //ifade stringe çeviriyoruz


let userInfo=localStorage.getItem('userInfo') //bilgiyi al
userInfo=JSON.parse(userInfo) //string ifadeyi çevirdik
console.log(userInfo)