let button = document.getElementById("button-id");
button.style.height = "70px"
button.style.width = "120px";
button.style.backgroundColor = "green";
button.style.borderRadius = "16px";
button.style.font = "12px"
button.onclick = function() {
    if(button.innerHTML == "OFF"){
        button.innerHTML = "ON";
    }
    else if(button.innerHTML == "ON"){
        button.innerHTML = "OFF";
    }
}
