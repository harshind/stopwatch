let count = 0
function counter(count){
    count = count + 1
    console.log(count);
}

document.querySelector("#start").addEventListener('click', ()=>{
    let timer = setInterval(()=>{
        let TimerComp = document.querySelector("#timer")
        let minutes = TimerComp.textContent.split(":")[0];
        let seconds = TimerComp.textContent.split(":")[1];
        //console.log(seconds);
        seconds = (parseInt(seconds)+1)> 9 ? (parseInt(seconds)+1): "0" + (parseInt(seconds)+1);
        if(seconds > 59){
            minutes = (parseInt(minutes)+1)> 9 ? (parseInt(minutes)+1): "0" + (parseInt(minutes)+1);
            seconds = "00"
        } 
        TimerComp.textContent = minutes + " : " + seconds;

    }, 1000)
    document.querySelector("#stop").addEventListener('click',()=>{
        clearInterval(timer)
    })
    
    document.querySelector("#reset").addEventListener('click',()=>{
        clearInterval(timer)
        let TimerComp = document.querySelector("#timer")
        TimerComp.textContent = "00" + " : " + "00";
    })
    
})

