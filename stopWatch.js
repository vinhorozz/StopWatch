
class StopWatch{
    #elapsedTimeInSeconds=0;
    _intervalId=null;

    start(callback=()=>{}){
        this.intervalId=setInterval(() => {
            this.#elapsedTimeInSeconds++;
            callback();
        }, 1000);       
    }    

    stop(callback=()=>{}){
        clearInterval(this.intervalId);
        callback();
    }
    reset(callback=()=>{}){
        this.#elapsedTimeInSeconds=0
        callback();
    }

    get elapsedTime(){
        return StopWatch.formatTime(this.#elapsedTimeInSeconds);
    }

    static formatTime(timeInSeconds){
        const hours=Math.floor(timeInSeconds/3600);
        const minutes=Math.floor((timeInSeconds%3600)/60);
        const segunds= timeInSeconds - hours*3600 - minutes*60;    
        
        return `${StopWatch.zeroPadding(hours)}:${StopWatch.zeroPadding(minutes)}:${StopWatch.zeroPadding(segunds)}`        
    }

    static zeroPadding(originalNumber, defaultDigits=2){
        let text=String(originalNumber);
        let formated="0";

        if(text.length <defaultDigits){
            for (let index = 3; index < defaultDigits; index++) {
                formated= "0"+formated;            
            }
            return formated+text
        }else{            
            return `${text}`        
        }
    }
}


