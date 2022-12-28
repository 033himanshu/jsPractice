class Timer{
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        this.startButton.addEventListener('click',this.start)
        this.pauseButton.addEventListener('click',this.pause)
        this.durationInput.addEventListener('click',this.durationChange)
    }

    start = () =>{
        console.log("Time to start the timer")
        this.tick()
        this.interval = setInterval(this.tick,1000)
    }

    pause = () =>{
        console.log("Time to pause the timer")
        clearInterval(this.interval)
    }
    tick = () =>{
        this.timeRemaining = this.timeRemaining -1
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time){
        this.durationInput.value = time
    }
    durationChange = () =>{
        console.log("Change on duration input")
    }
}


const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInput = document.querySelector('#duration')

const timer = new Timer(durationInput,startButton,pauseButton)
// const timer = document.querySelector('#timer')
// let interval = undefined
// const startClock = function(){
//     let secs = parseInt(textBar.value);
//     if(secs < 0){
//         secs = 30;
//         textBar.value = secs;        
//     }
//     textBar.style.display = 'none';
//     timer.style.display = 'inline';
//     timer.innerText = textBar.value;
//     decrement()
// }

// const decrement = async function(){
//     interval =  setInterval(() => {
//         textBar.value = parseInt(textBar.value) -1;
//         timer.innerText = textBar.value;
//         checkTextBar();
//     },1000);
//     const checkTextBar = function() {
//         let secs = parseInt(textBar.value);
//         if(secs <= 0)
//             clearInterval(interval);
//     }
// }


// timer.addEventListener('click',()=>{
//     timer.style.display = 'none';
//     textBar.style.display = 'inline';
//     clearInterval(interval);
//     play.disabled  = false;
// })
// play.addEventListener('click',() =>{
//     clearInterval(interval);
//     play.disabled = true;
//     startClock();

// })
// pause.addEventListener('click',() => {
//     clearInterval(interval)
//     play.disabled = false;
// })