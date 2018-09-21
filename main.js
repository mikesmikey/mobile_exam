
var botnum = Math.floor((Math.random() * 8999) + 1001);
window.onload = function what(){
    document.getElementById("bottext").innerHTML = botnum;
    };


function getInfo() {
    var username = document.getElementById("usernamebox").value;
    var password = document.getElementById("passwordbox").value;
    var inputbotbox = document.getElementById("botbox").value;
    //alert(username+"\n"+password+"\n"+inputbotbox);
    checkUsername(username);
}

function checkPass() {
    var username = document.getElementById("usernamebox").value;
    var password = document.getElementById("passwordbox").value;
    var inputbotbox = document.getElementById("botbox").value;
    var usernamepass, passwordpass, botboxpass;

    if(username == '') {
        document.getElementById("usernametext").innerHTML = "Username ไม่ควรว่าง";
        document.getElementById("usernamebox").classList.add("is-danger");
    }
    if(password == '' ) {
        document.getElementById("passwordtext").innerHTML = "Password ไม่ควรว่าง";
        document.getElementById("passwordbox").classList.add("is-danger");
    }
    if(inputbotbox == '' ) {
        document.getElementById("botboxtext").innerHTML = "AutoBot ไม่ควรว่าง";
        document.getElementById("botbox").classList.add("is-danger");
    }

    if(username != '') {
        document.getElementById("usernamebox").classList.remove("is-danger");
        document.getElementById("usernametext").innerHTML = "";
        if (username == "admin") {
            usernamepass = true;
        }
        else {
            document.getElementById("usernametext").innerHTML = "Username ไม่ถูกต้อง";
             document.getElementById("usernamebox").classList.add("is-danger");
        }
    }

    if(password != '') {
        document.getElementById("passwordbox").classList.remove("is-danger");
        document.getElementById("passwordtext").innerHTML = "";
        if (password == "1234") {
            passwordpass = true;
        }
        else {
            document.getElementById("passwordtext").innerHTML = "Password ไม่ถูกต้อง";
            document.getElementById("passwordbox").classList.add("is-danger");
        }
    }

    if(inputbotbox != '') {
        document.getElementById("botbox").classList.remove("is-danger");
        document.getElementById("botboxtext").innerHTML = "";
        if (inputbotbox == botnum.toString()) {
            botboxpass = true;
        }
        else {
            document.getElementById("botboxtext").innerHTML = "Autobot ไม่ถูกต้อง";
            document.getElementById("botbox").classList.add("is-danger");
        }
    }

    if(usernamepass && passwordpass && botboxpass) {
        window.location.replace("loginsuccess.html");
    }
}

function checkEmail() {
    document.getElementById("passwordbox").classList.remove("title");
}