var dls = document.getElementsByClassName('hover-menu');
var underline = document.querySelectorAll('.pentionName');

console.log(dls);
console.log(underline);


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
}, 1000);