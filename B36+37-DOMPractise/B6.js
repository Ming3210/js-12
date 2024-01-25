let stdId = document.getElementById('std-id');
let stdName = document.getElementById('std-name');
let stsAge = document.getElementById('sts-age');
let stsPhone = document.getElementById('sts-phone');
let stdEmail = document.getElementById('std-email');
let ipId = document.getElementById('ip-id');
let ipName = document.getElementById('ip-name');
let ipPhone = document.getElementById('ip-phone');
let ipAge = document.getElementById('ip-age');
let ipEmail = document.getElementById('ip-email');
let submit = document.getElementById('submit');


let id = ipId.value
let phone = ipPhone.value
if(id.length !=6 ){
    alert('Student id can 6 ki tu');
}
if (stsAge < 18) {
    alert("Age phải có giá trị lớn hơn hoặc bằng 18")
}
if(ipPhone !=0 && ipPhone != 10){
    alert("Phone phải có giá trị 0 và độ dài = 10")
}