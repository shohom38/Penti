var pentionList = [
    {
        region : '가평',
        name :  ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
                '레이크힐', '힐스토리', '아델하임', '모닝']
    },
    {
        region : '남이섬',
        name : ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
        '레이크힐', '힐스토리', '아델하임']
    },
    {
        region : '청평',
        name : ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네']
    },
    {
        region : '양평',
        name : ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
        '레이크힐']
    },
    {
        region : '기타',
        name : ['플로라', '멀리가는향기', '은가비', '리버빌', '남이섬옹달샘', '대추나무사랑걸렸네', '게스트하우스', 
        '레이크힐']
    }
];

var t1 = pentionList[0].region;
var t2 = pentionList[0].name;
var pentionLength = Object.keys(pentionList);

console.log(t1, t2);

for (var i = 0; i < pentionLength.length; i++) {
    var t3 = pentionList[i].region;
    var t4 = pentionList[i].name;
    console.log(t3+'<br/>'+t4);
    document.write('<dt>' + t3 + '</dt>' + '<dd>' +t4[i]+ '</dd>');
};

// var pentionName = pentionList.name;
// var pentionRegion = pentionList.region;
//var pentionMenu = document.getElementsByClassName('hover-menu');

// var pent = pentionList[0].region;
// var pent2 = pentionList[0].name;
// console.log(pent);
// console.log(pent2);

// console.log(pent2.length);

// var pentionLength = Object.keys(pentionList);
// var pentionName = pentionList[Object.keys(pentionList)[0]];
// console.log(pentionName);
// document.write(pentionName);
// document.write(pentionLength);
// var pentionNameLength = pentionList.name;
// console.log(pentionNameLength);

// for (var i = 0; i < pentionList.name[i].length; )