let username=prompt("Kullanıcı adı giriniz")
let info=document.querySelector("#info")

//ternary kullanımı: kosul ? doğruysa : yanlışsa (soru işareti koşulu bitirir)
info.innerHTML=`${username.length>0 ? username : "Kullanıcı bilgisi yok"}`