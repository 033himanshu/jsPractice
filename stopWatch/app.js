const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const durationInput = document.querySelector('#duration')
const circle = document.querySelector('circle')
const perimeter = 2*circle.getAttribute('r')*Math.PI
let duration = 0
const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(totalDuration){
        console.log("Timer Started")
        circle.setAttribute('stroke',"blue")
        circle.setAttribute('stroke-dasharray',perimeter)
        duration = totalDuration
        // currentDivision = perimeter/(parseFloat(durationInput.value)*100)
    },
    onTick(timeRemaining){
        console.log("Timer ticked")
        circle.setAttribute('stroke-dashoffset',perimeter * (timeRemaining / duration -1))
    },
    onComplete(){
        circle.setAttribute('stroke-dashoffset',perimeter)
        console.log("Timer Completed")
    }
})