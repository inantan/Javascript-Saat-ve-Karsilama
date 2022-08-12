let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let pName = prompt("Adınız Nedir?");
let myName = document.getElementById("myName")

if(pName){
    myName.innerHTML = `${pName}`
}else{
    alert("Boş bırakılamaz!")
    location.reload();
}

function clockFunction(){
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hours = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.getElementById("myClock").innerHTML = `${hours}: ${min}: ${sec} ${day}` 
}
setInterval(clockFunction, 1000);