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

// var pentionList = [
//     {
//         region : '가평',
//         name :  ['플로라', '옹달샘', '플로라', '플로라', '옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
//                 '레이크힐', '힐스토리', '아델하임', '모닝']
//     },
//     {
//         region : '남이섬',
//         name : ['플로라', '옹달샘', '플로라', '옹닰햄', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
//         '레이크힐', '힐스토리', '아델하임']
//     },
//     {
//         region : '청평',
//         name : ['플로라', '플로라', '옹달샘', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네']
//     },
//     {
//         region : '양평',
//         name : ['플로라', '플로라', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
//         '레이크힐']
//     },
//     {
//         region : '기타',
//         name : ['플로라', '플로라', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
//         '레이크힐']
//     }
// ];

// var pentionName = pentionList.name;
// var pentionRegion = pentionList.region;
//var pentionMenu = document.getElementsByClassName('hover-menu');

// var pentionLength = Object.keys(pentionList);
// var pentionNameL = Object.values(pentionList);
// var pentionName = pentionList[0].name;
// console.log(pentionName);
// console.log(pentionNameL);
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



//ver1

// for (var i = 0; i < pentionList[i].name.length; i++) {
    // console.log(r);
    // console.log(n);
    // var obj_key = Object.keys(pentionList);
    // var obj_val = pentionList[obj_key];
    // console.log(obj_val);
    // var r = pentionList[i].region;
//     var innerdt = '<dt>' +r+ '</dt>';
//     document.getElementById('hoverMenu0'+(i+1)).innerHTML += innerdt;
//     for (var j = 0; j < pentionList[i].name.length; j++) {
//         var n = pentionList[i].name;
//         console.log(n); 
//         var innerdd = '<dd>' + n[j] + '</dd>';
//         console.log(innerdd);
//         document.getElementById('hoverMenu0'+(i+1)).innerHTML += innerdd;
//     };
// };
//ver1

var pentionList = [
    {
        district: '전국',
        region: [
            {
                regName: '전국1',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '전국2',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '전국3',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '전국4',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '전국5',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    }
                ]
            },

        ]
    },
    {
        district: '경기도',
        region: [
            {
                regName: '가평',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '남이섬',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '청평',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '양평',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '기타',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: false,
                        newOpen: true
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: false,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: false,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: true
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: false,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: false,
                        newOpen: true
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: true
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: false,
                        newOpen: false
                    }
                ]
            },

        ]
    },
    {
        district: '강원도',
        region: [
            {
                regName: '춘천',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '속초',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '강릉',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '양양',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '기타',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    }
                ]
            },

        ]
    },
    {
        district: '충청/전라',
        region: [
            {
                regName: '나주',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '전주',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '광주',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '정읍',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '기타',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    }
                ]
            },

        ]
    },
    {
        district: '경상/제주',
        region: [
            {
                regName: '구미',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '울산',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '포항',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '부산',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '기타',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    }
                ]
            },

        ]
    },
    {
        district: '레저/문화',
        region: [
            {
                regName: '스키',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '영화',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '썰매',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '스킨스쿠버',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '스카이다이빙',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    }
                ]
            },

        ]
    },
    {
        district: '주말/당일권',
        region: [
            {
                regName: '주말1',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '주말2',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '주말3',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '주말4',
                pentionG: [
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                ]
            },
            {
                regName: '주말5',
                pentionG: [
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플로라',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '푸른하늘',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '고요한아침',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '플라밍고',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '아델하임',
                        reOpen: true,
                        newOpen: false
                    },
                    {
                        pentionName: '대추나무사랑걸렸네',
                        reOpen: true,
                        newOpen: false
                    }
                ]
            },

        ]
    }
];

console.log(pentionList);
console.log(pentionList.length);

//ver2

// console.log(pentiInfo.pentionInfo.Gyeongsang.region[0]);
// console.log(pentiInfo.pentionInfo.Gyeongsang.pentionStatus.pentionName[0]);

// console.log(pentionList.length)
// console.log(pentionD.length);

// var keyarr = Object.keys(pentiInfo.pentionInfo);
// console.log(keyarr.length);

// for (var u = 0; u < pentionD.length; u++) {
//     var d = pentionD[u];
//     var inneradr = '<a>' +d+ '</a>';
//     document.getElementById('district0'+[u]).innerHTML += inneradr;
//     for (var i = 0; i < pentionList.length; i++) {
//         var r = pentionList[i];
//         var innerdt = '<dt>' +r+ '</dt>';
//         document.getElementById('hoverMenu0'+(i+1)).innerHTML += innerdt;
//         for (var j = 0; j < pentionArr[i].length; j++) {
//             var n = pentionArr[i][j];
//             console.log(n); 
//             var innerdd = '<dd>' + n + '</dd>';
//             console.log(innerdd);
//             // console.log(pentionArr[i]);
//             document.getElementById('hoverMenu0'+(i+1)).innerHTML += innerdd;
//         };
//     };
// };

var tabSet = document.querySelectorAll('.top-menu-wrap .tab-list li');
var tabList = document.querySelector('.top-menu-wrap .tab-list');
// console.log(tabSet);
// console.log(tabList);

var curNav = document.querySelector('.top-menu-wrap .tab-list li.on');
console.log(curNav);

tabList.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target.className === "tab-btn") {
        console.log('HELLLLL')
        console.log(e, "E");
        curNav.classList.remove('on');  
        const curLi = e.target.parentElement;
        console.log(curLi);
        curLi.classList.add('on');
        curNav = curLi;
    }
});

//ver2


// var tabSet = document.querySelectorAll('.top-menu-wrap .tab-list li');
// console.log(tabSet);
// for (var i = 0; i < tabSet.length; i++) {
//     tabSet[i].querySelector('.tab-btn').addEventListener('click',
//     function(t){
//         t.preventDefault();
//         for(var j = 0; j < tabSet.length; j++) {
//             tabSet[j].classList.remove('on');
//         }
//         this.parentNode.classList.add('on');
//     });
// }

//ver3

// console.log(pentionList[0].region);


for(var k = 0; k < 2; k++) {
    console.log(pentionList[k].region.length);
}

// console.log(pentionList[0].length);
for(var i = 0; i < pentionList.length; i++) {
    console.log(pentionList.length);
    for(var j = 0; j < pentionList[j].region.length; j++) {
        console.log(pentionList[i].region[j]);
        document.getElementById('hoverMenu0'+i+'-'+j).innerHTML += '<dt>' + pentionList[i].region[j].regName + '</dt>';
        document.getElementById('hoverMenu0'+i+'-'+j).innerHTML += '<dd>' + pentionList[i].region[j].pentionG[j].pentionName + '</dt>';
    }
}


// var pentionNameInfo = pentionInfo.map(arr2 => arr2.pentionG);
// console.log(pentionNameInfo);
var pentionInfo = pentionList.map(arr => arr.region);
var pentiName = pentionInfo[0][0].pentionG[0].pentionName;
console.log(pentionInfo);

// console.log(pentionList[0].region[0].pentionG);


// for (var i = 0; i < pentionList[i].region.length; i++) {
//     var r = pentionList[i].region[i].regName;
//     // console.log(pentionList[i]);
//     var innerdt = '<dt>' +r+ '</dt>';
//     document.getElementById('hoverMenu0'+i+'-'+i).innerHTML += innerdt;

//     for (var j = 0; j < pentionList[i].region[i].pentionG.length; j++) {
//         // console.log(pentionList[i].region[i].pentionG.length);
//         var n = pentionList[i].region[i].pentionG[j].pentionName;
//         // console.log(n); 
//         var innerdd = '<dd>' + n + '</dd>';
//         // console.log(innerdd);
//         // console.log(pentionArr[i]);
//         document.getElementById('hoverMenu0'+0+'-'+i).innerHTML += innerdd;
//     };
// };
//ver3

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
