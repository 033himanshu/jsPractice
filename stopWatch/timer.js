class Timer{
    constructor(durationInput, startButton, pauseButton,callbacks){
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if(callbacks){
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        this.startButton.addEventListener('click',this.start)
        this.pauseButton.addEventListener('click',this.pause)
        this.durationInput.addEventListener('click',this.durationChange)
    }

    start = () =>{
        //console.log("Time to start the timer")
        this.startButton.disabled = true
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        
        this.tick()
        this.interval = setInterval(this.tick,10)
    }

    pause = () =>{
        //console.log("Time to pause the timer")
        clearInterval(this.interval)
        this.startButton.disabled = false
    }
    tick = () =>{
        if(this.timeRemaining <= 0){
            if(this.onComplete){
                this.onComplete()
            }
            this.startButton.disabled = false
            this.pause()
            this.timeRemaining = 0
        }else{
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
            this.timeRemaining = this.timeRemaining - 0.01  
        }
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2)
    }
    durationChange = () =>{
        // console.log("Change on duration input")
    }
}
