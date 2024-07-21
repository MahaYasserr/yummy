// validation
// 1-username

let userName= document.getElementById("username")
let danger1= document.getElementById("danger1")
let email=document.getElementById("email")
let danger2= document.getElementById("danger2")
let phone=document.getElementById("phone")
let danger3= document.getElementById("danger3")

function validateUserName(){
    var text= userName.value
    var regex= /^[a-z0-9_-]{3,15}$/
    if (regex.test(text)==true){
        console.log('match');
        danger1.classList.add("warning1")
        
    }else{
        console.log('no match');
        
        danger1.classList.remove("warning1")
    }
}

// 2-email
function validateemail(){
    var text= email.value
    var regex= /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if (regex.test(text)==true){
        console.log('match');
        danger2.classList.add("warning1")
        
    }else{
        console.log('no match');
        
        danger2.classList.remove("warning1")
    }
}

// 3-phone

function validatephone(){
    var text= phone.value
    var regex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (regex.test(text)==true){
        console.log('match');
        danger3.classList.add("warning1")
        
    }else{
        console.log('no match');
        
        danger3.classList.remove("warning1")
    }
}

