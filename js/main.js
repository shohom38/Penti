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

    console.log(hourFirst);
    console.log(hourSecond);
    console.log(minFirst);
    console.log(minSecond);
    console.log(hour.length);

    //hour.length[0].style.color = 'blue';

    //hourFirst.style.color = 'blue'; // why?


}, 1000);

/*
var hours = document.getElementById('hours');
var spanHour = hours.getElementsByTagName('span');

console.log(spanHour.length);*/

 var pentionList01 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
'레이크힐', '힐스토리', ' 아델하임', '모닝'];

var pentionMenu = document.getElementsByClassName('hover-menu');

for (i = 0 ; i < pentionList01.length ; i++) {
    /*var dd = '<dd>'+pentionList01[i]+'</dd>';
    document.getElementById('hoverMenu01').innerHTML = dd;*/
    document.getElementById('hoverMenu01').innerHTML = '<dd>'+pentionList01[i]+'</dd>';
}

/*
document.getElementById('hoverMenu01').innerHTML = pentionList01;
*/

/*
var dtitle = document.createElement('dt');

var dtNode = document.createTextNode('가평');

dtitle.appendChild(dtNode);
*/

