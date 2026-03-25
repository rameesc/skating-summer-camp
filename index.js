

const popup=document.getElementsByClassName("global")[0]
const time=document.getElementsByClassName("time")[0]
const registerClose=document.getElementsByClassName("register-close-timer")[0]
const myElement=document.getElementById("back_btn")

 


function autoClose(){
    

    const remi=1774433235583

    if(remi < Date.now() ){
         popup.style.display="block"
    }

    

}
autoClose()
myElement.addEventListener("click",()=>{
  window.history.go(-1)
})

// 1. Calculate the initial difference once
let diff = Math.max(0, 1774433235583 - Date.now());

// 2. Convert total milliseconds into total seconds
let totalSeconds = Math.floor(diff / 1000);

function showTimerToClose() {
    // If time is already up, hide elements immediately
    if (totalSeconds <= 0) {
        time.style.display = "none";
        registerClose.style.display = "none";
        return;
    }

    const clearTimer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(clearTimer);
            time.style.display = "none";
            return;
        }

        totalSeconds--;

        // Calculate minutes and seconds from the remaining totalSeconds
        let m = Math.floor(totalSeconds / 60);
        let s = totalSeconds % 60;

        // Use padStart to keep the format looking like 05:09 instead of 5:9
        time.innerText = `Registration closes soon : ${m}:${s.toString().padStart(2, '0')}`;
        
    }, 1000);
}

showTimerToClose();







