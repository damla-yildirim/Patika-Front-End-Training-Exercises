let greeting=document.querySelector("#greeting")//id aldık
greeting.addEventListener("click", domClick)

function domClick(){
    console.log("Tıklandı")
    //console.log(this)//html etiketini yazdı
    //console.log(this.innerHTML)//html kodun içindekini yazdı
    //this.style.color="red"// kırmızı yaptık
    this.style.color=="red" ? this.style.color="black":this.style.color="red" //tıklandığında siyahsa kırmızıya kırmımzysa siyaha
    
}
