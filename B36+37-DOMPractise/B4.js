let ip1 = document.getElementById("ip-1");
let ip2 = document.getElementById("ip-2");
let ip3 = document.getElementById("ip-3");
let btn = document.getElementById("btn")
let a
let b
ip1.onkeyup = function(){
    a = ip1.value
}
ip2.onkeyup = function(){
    b = ip2.value
}

btn.onclick = function(){
    ip3.value = Number(a) + Number(b);
}
let ip4 = document.getElementById("ip-4");
let ip5 = document.getElementById("ip-5");
let ip6 = document.getElementById("ip-6");
let btn2 = document.getElementById("btn-2")
let c
let d
ip4.onchange = function(){
    c = ip4.value
}
ip5.onchange = function(){
    d = ip5.value
}

btn2.onclick = function(){
    ip6.value = Number(c) + Number(d);
}

