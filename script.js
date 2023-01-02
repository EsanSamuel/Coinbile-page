Img = document.getElementById("sImgs")
var emailError = document.getElementById("email-error")
toolBtn = document.querySelectorAll(".tool")

function firstImg(){
    Img.src = "Blockchain.jpg"
}

function secondImg(){
    Img.src = "man.jpg"
}

function thirdImg(){
    Img.src = "woman.jpg"
}

function ValidateEmail(){
    var Email = document.getElementById("email").value

    if(Email.length == 0){
        emailError.innerHTML = "*Form cannot be Empty"
        return false
    }

    emailError.innerHTML = ""
    return true
}

function validated(){
    if(!ValidateEmail()){
        return false
    }
    else{
        alert("Message Submitted")
    }
}

toolBtn.forEach(btn=>{
    btn.addEventListener("mouseenter",()=>{
        document.querySelector(".jj .active").classList.remove("active")
        btn.classList.add("active")
    })
})