let ip = document.getElementById('ip');
let btn = document.getElementById('btn');
let ul= document.getElementById('ul');
ip.style.backgroundColor="yellow";

btn.onclick = function() {
    let li = document.createElement('li');
    li.innerHTML = ip.value
    ul.appendChild(li)
    ip.value = ""
    ip.style.backgroundColor = "yellow";
}
ip.oninput = function() {
    if (ip.value != "") {
      ip.style.backgroundColor = "white";
    }
}