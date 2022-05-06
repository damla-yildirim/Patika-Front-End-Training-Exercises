//tempalate literals

let username="damla";
const DOMAIN="kodluyoruz.org"
let email=username+"@"+DOMAIN;

console.log("Merhaba ",username," sitemize hoşgeldin mail adresin: ",email);

//${} kullanım bu kullanımı yapabilmek için backtick(´´)(altgr+,) ile yapılması lazım normal "" ya da '' ile olmaz.
//birden fazla satırla kullanılabilir

let info=`Merhaba ${username} sitemize hoşgeldin. mail adresin: ${email}
kisa isim: ${username[0]}
mail adresinin uzunluğu: ${email.length}
borcunuz ${(2+3)*10}
gün ve saat: ${new Date().getHours()}`

console.log(info);

