let show =document.getElementById("show")
let formSection =document.getElementById("formSection")

let send =document.getElementById("send")

show.onclick = function(){
    formSection.style.display = "block";
    show.style.display = "none";
}

send.onclick = function(){
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let message = document.getElementById("message").value;
    console.log(name)
    console.log(phoneNumber)
    console.log(message)
    let postInfo = new XMLHttpRequest();
postInfo.open("GET", `https://api.telegram.org/bot1335960842:AAGxKip279qlDy_kFXIjtlPHOnX7H7eoo94/sendMessage?
text= Name: ${name} %0A
Phone number: ${phoneNumber} %0A
Message: ${message}&chat_id=-483244449`,false)
postInfo.send();
}