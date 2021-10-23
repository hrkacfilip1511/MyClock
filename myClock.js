setInterval(clockSet, 1000)

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


function clockSet() {
    const currentTime = new Date()
    let secs = currentTime.getSeconds() / 60;
    let mins = (secs + currentTime.getMinutes()) / 60;
    let hrs = (mins + currentTime.getHours()) / 12;

    timeRotation(hours, hrs)
    timeRotation(minutes, mins)
    timeRotation(seconds, secs)
}

function timeRotation(elem, rotation){
    elem.style.setProperty('--rotation', rotation * 360);
}

clockSet();

$(document).ready(function(){
    $('.clock').hover(function() {
        $(this).animate({
           left: '230px',
           width: '350px',
           height: '350px',
        })
    })
})