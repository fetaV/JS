let userName = prompt("Adınızı giriniz.")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

function zaman ()
{   let anlık = new Date();  
    let saat = anlık.getHours(); 
    let dakika = anlık.getMinutes(); 
    let saniye = anlık.getSeconds(); 
    var d = new Date(); 
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    let iceaktarma = document.querySelector("#myClock") 
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
}
let simdi = setInterval(zaman,100); 