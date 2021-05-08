/*
var dls = document.getElementsByClassName('hover-menu');
var underline = document.querySelectorAll('.pentionName');

console.log(dls);
console.log(underline);

var pentionList01 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', '레이크힐', '힐스토리', ' 아델하임', '모닝'];

var newDl = document.createElement('dl');

var newDD = document.createElement('dd');

newDD.innerHTML = "<a><span>썸씽</span></a>";

document.getElementById('menu-hover').appendChild(newDD);
*/

var countTime = setInterval(function() {
    var today = new Date()
    
    var hour = frontZero(today.getHours())
    
    var min = frontZero(today.getMinutes())
    
    var sec = frontZero(today.getSeconds())
    
    document.getElementById('hours').innerText = hour
    document.getElementById('min').innerText = min
    document.getElementById('sec').innerText = sec

    function frontZero(num) {
        return (num < 10 ? '0' + num : '' + num)
    }

    /*var Hlngth = hour.length;

    console.log(Hlngth);*/

    var hourFirst = hour.charAt(0);
    var hourSecond = hour.charAt(1);
    var minFirst = min.charAt(0);
    var minSecond = min.charAt(1);

    var hourF = document.getElementById('hours');

    hourF.style.color = 'blue';

/*    console.log(hourFirst);
    console.log(hourSecond);
    console.log(minFirst);
    console.log(minSecond);
    console.log(hour.length);
*/
    //hour.length[0].style.color = 'blue';

    //hourFirst.style.color = 'blue'; // why?


}, 1000);

/*
var hours = document.getElementById('hours');
var spanHour = hours.getElementsByTagName('span');

console.log(spanHour.length);*/

var regionList01 = ['가평', '남이섬', '청평', '양평', '기타'];
var pentionList01 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
'레이크힐', '힐스토리', ' 아델하임', '모닝'];


//var pentionMenu = document.getElementsByClassName('hover-menu');
var addList = '';
var addRegion = '';
// var adddt = document.createElement('dt');
// var adddtText = document.createTextNode('가평');

for (i = 0 ; i < pentionList01.length ; i++) {
    /*var dd = '<dd>'+pentionList01[i]+'</dd>';
    document.getElementById('hoverMenu01').innerHTML = dd;*/
    addList += '<dd>' + '<a href="#">' + '<span>' + pentionList01[i] + '</span>' + '</a>' + '</dd>';
};

for (i = 0; i <regionList01.length; i++) {
    addRegion += '<dt>' +regionList01[i]+ '</dt>';
};


// document.getElementById('hoverMenu01').innerHTML = addRegion;
// document.getElementById('hoverMenu01').innerHTML = addList; // 이게 없으면 dt가 나옴..

/*
document.getElementById('hoverMenu01').innerHTML = pentionList01;
*/

/*
var dtitle = document.createElement('dt');

var dtNode = document.createTextNode('가평');

dtitle.appendChild(dtNode);
*/


const Pention1 = {
    region : '<dt>' + regionList01[0] + '</dt>',
    pentionName : addList 
};

document.getElementById('hoverMenu01').innerHTML = Pention1.region + Pention1.pentionName;
// document.getElementById('hoverMenu01').innerHTML = Pention1.pentionName;

var New = '<span class="r-mark"><img src="../img/header/r-mark.png" alt="renew"></span>';