let p = document.getElementById("p-id");
let input = document.getElementById("input");
let button = document.getElementById("button-id");
input.style.borderRadius = "12px"
button.style.borderRadius = "12px"
button.style.backgroundColor = "green"
button.onclick = function() {
    if((input.value).length<10 && (input.value).length>1) {
        alert("Hợp lệ")
    }else alert("Không hợp lệ")
}