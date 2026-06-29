let theme = document.querySelector('.themeBtn');
let icon = document.querySelector('.themeBtn i');
let currTime = document.querySelector('#currentTime');
let currDate = document.querySelector('#currentDate');
let disTime = document.querySelector('.timer');
let start = document.querySelector('.start');
let startIcon = document.querySelector('.start i');
let pause = document.querySelector('.pause');
let pauseIcon = document.querySelector('.pause i');
let restart = document.querySelector('.restart');
let restartIcon = document.querySelector('.restart i');
let sec = 0;
let min= 0;
let hour = 0;
if(localStorage.getItem("theme")==="dark"){
      document.body.classList.add("dark");
      icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
}
//showing current date and time
function updateClock(){
    let d = new Date();
    let day = d.toLocaleDateString(['en-us'], {
        weekday: 'long'
    });
    let date = d.toLocaleDateString(['en-us'], {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    let time = d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    currDate.innerHTML = `${day}, ${date}`;
    currTime.innerHTML = time;
}
updateClock();
setInterval(updateClock,1000);


//theme changing
theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');

        localStorage.setItem("theme","dark")
    }
    else {
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');

        localStorage.setItem("theme","light")
    }
});


let timer;
start.addEventListener("click",()=>{
    startIcon.classList.add('fa-pause');
    startIcon.classList.remove('fa-play');

 pauseIcon.classList.remove('fa-pause');
 pauseIcon.classList.add('fa-play')

    start.disabled = true;
  timer = setInterval(()=>{
                sec++;
                if(sec=== 60){
                    min++;
                    sec = 0;
                    if(min=== 60){
                        hour++;
                        min = 0;
                    }
                }
                let fomattedSec = String(sec).padStart(2,'0');
                let fomattedMin = String(min).padStart(2,'0');
                let fomattedhour = String(hour).padStart(2,'0');
disTime.innerHTML = `${fomattedhour} : ${fomattedMin} : ${fomattedSec}`
  },1000);
});

pause.addEventListener("click",()=>{
    start.disabled = false;
    clearInterval(timer);
        pauseIcon.classList.remove('fa-play');
    pauseIcon.classList.add('fa-pause');

     startIcon.classList.remove('fa-pause');
    startIcon.classList.add('fa-play');
});

restart.addEventListener("click",()=>{
     start.disabled = false;
    clearInterval(timer);

    restartIcon.classList.remove("spin");

    setTimeout(() => {
        restartIcon.classList.add("spin");
    }, 10);

    setTimeout(() => {
        restartIcon.classList.remove("spin");
    }, 510);
    sec=0;
    min = 0;
    hour = 0;
    disTime.innerHTML = `00 : 00 : 00`

});





