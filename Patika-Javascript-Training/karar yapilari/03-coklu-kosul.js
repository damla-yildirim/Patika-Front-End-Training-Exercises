let userName=prompt("Kullanıcı Adı")
let age=prompt("Yaşınız")

if(userName && age>=18)
{
    console.log("Ehliyet alabilirsiniz")
}
else if(!userName)
{
    console.log("Kullanıcı Adı yok")
}
else if(!(age<18))
{
    console.log("Yaş bilginiz yok ya da 18 yaşından küçüksünüz")
}