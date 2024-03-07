const display = document.getElementById("display")
let elpasedTime = 0;
let startTime = 0;
let timer = null;
let isRunning = false;

function start (){

    if(!isRunning){
        startTime = Date.now() - elpasedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}


function stop (){
    if(isRunning){
        clearInterval(timer);
        elpasedTime = Date.now() - startTime;
        isRunning = false;
    }
}


function reset (){
    clearInterval(timer);
    startTime = 0;
    elpasedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
     
}


function update (){
    const currentTime = Date.now();
    elpasedTime = currentTime - startTime;

    let hours = Math.floor(elpasedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elpasedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elpasedTime / 1000 % 60);
    let milliseconds = Math.floor(elpasedTime % 1000 / 10);

    hours = hours.toString().padStart(2, 0)
    minutes = minutes.toString().padStart(2, 0)
    seconds = seconds.toString().padStart(2, 0)
    milliseconds = milliseconds.toString().padStart(2, 0)

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
    
}