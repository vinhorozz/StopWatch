


const startBtn=document.getElementById('start');
const stopBtn=document.getElementById('stop');
const resetBtn=document.getElementById('reset');
const StopWatchDisplay=document.getElementById('display');

const sw1=new StopWatch();

function updateDisplay() {
        StopWatchDisplay.innerText=sw1.elapsedTime;        
    }

    startBtn.addEventListener("click",
        ()=>{sw1.start(updateDisplay)
            startBtn.disabled = true;
        startBtn.style.backgroundColor="grey";})

    stopBtn.addEventListener('click',
        ()=>{sw1.stop()
            startBtn.disabled = false;
            startBtn.style.backgroundColor="green";
        })
    
    resetBtn.addEventListener('click',
        ()=>{sw1.reset(updateDisplay)                
        })


        