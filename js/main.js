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

// var regionList01 = ['가평', '남이섬', '청평', '양평', '기타'];
// var pentionList01 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
// '레이크힐', '힐스토리', ' 아델하임', '모닝'];
// var pentionList02 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
// '레이크힐', '힐스토리', ' 아델하임'];
// var pentionList03 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네'];
// var pentionList04 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
// '레이크힐'];
// var pentionList05 = ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
// '레이크힐'];

var pentionList = [
    {
        region : '가평',
        name :  ['플로라', '옹달샘', '플로라', '플로라', '옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
                '레이크힐', '힐스토리', '아델하임', '모닝']
    },
    {
        region : '남이섬',
        name : ['플로라', '옹달샘', '플로라', '옹닰햄', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
        '레이크힐', '힐스토리', '아델하임']
    },
    {
        region : '청평',
        name : ['플로라', '플로라', '옹달샘', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네']
    },
    {
        region : '양평',
        name : ['플로라', '플로라', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
        '레이크힐']
    },
    {
        region : '기타',
        name : ['플로라', '플로라', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
        '레이크힐']
    }
];

// var pentionName = pentionList.name;
// var pentionRegion = pentionList.region;
//var pentionMenu = document.getElementsByClassName('hover-menu');

var pentionLength = Object.keys(pentionList);
var pentionNameL = Object.values(pentionList);
var pentionName = pentionList[0].name;
console.log(pentionName);
console.log(pentionNameL);
// document.write(pentionName);
// console.log(pentionLength);
// console.log(pentionList[1].name);
// var tt = pentionList[1].name;
// console.log(tt);

// for (var i = 0; i < pentionLength.length; i++) {
//     var pentionnameList = pentionList[i].name;
//     console.log(pentionnameList);
// }
// console.log(pentionName.length);
// console.log(pentionLength.length);
// console.log(pentionNameL.length);
for (var i = 0; i < pentionList[i].name.length; i++) {
    // console.log(r);
    // console.log(n);
    // var obj_key = Object.keys(pentionList);
    // var obj_val = pentionList[obj_key];
    // console.log(obj_val);
    for (var j = 0; j < pentionList[i].name.length; j++) {
        // var r = pentionList[i].region;
        // var innerdt = '<dt>' +r+ '</dt>';
        var n = pentionList[i].name;
        console.log(n); 
        var innerdd = '<dd>' + n[j] + '</dd>';
        console.log(innerdd);
        document.getElementById('hoverMenu0'+(i+1)).innerHTML += innerdd;
        // document.getElementById('hoverMenu0'+(i+1)).innerHTML += innerdt;
    };
};

var addList = '';
var addRegion = '';
// var adddt = document.createElement('dt');
// var adddtText = document.createTextNode('가평');

// for (i = 0 ; i < pentionName.length; i++) {
//     /*var dd = '<dd>'+pentionList01[i]+'</dd>';
//     document.getElementById('hoverMenu01').innerHTML = dd;*/
//     addList += '<dd>' + '<a href="#">' + '<span class="pentionName">' + pentionName[i] + '</span>' + '</a>' + '</dd>';
// };

// for (i = 0; i < pentionRegion.length; i++) {
//     addRegion += '<dt>' +pentionRegion[i]+ '</dt>';
// };


// document.getElementById('hoverMenu01').innerHTML = addRegion + addList;
// document.getElementById('hoverMenu01').innerHTML = addList; // 이게 없으면 dt가 나옴..

/*
document.getElementById('hoverMenu01').innerHTML = pentionList01;
*/

/*
var dtitle = document.createElement('dt');

var dtNode = document.createTextNode('가평');

dtitle.appendChild(dtNode);
*/


// const Pention1 = {
//     region : '<dt>' + regionList01[0] + '</dt>',
//     pentionName : addList 
// };

// const Pention2 = {
//     region : '<dt>' + regionList01[1] + '</dt>',
//     pentionName : addList 
// };

// const Pention3 = {
//     region : '<dt>' + regionList01[2] + '</dt>',
//     pentionName : addList 
// };

// const Pention4 = {
//     region : '<dt>' + regionList01[3] + '</dt>',
//     pentionName : addList 
// };

// const Pention5 = {
//     region : '<dt>' + regionList01[4] + '</dt>',
//     pentionName : addList 
// };

// document.getElementById('hoverMenu01').innerHTML = Pention1.region + Pention1.pentionName;
// document.getElementById('hoverMenu01').innerHTML = Pention1.pentionName;
