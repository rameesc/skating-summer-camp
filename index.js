

const popup=document.getElementsByClassName("global")[0]
const time=document.getElementsByClassName("time")[0]
const myElement=document.getElementById("back_btn")

 


function autoClose(){
    

    const remi=1774433235583

    if(remi < Date.now() ){
         popup.style.display="block"
    }

    

}
autoClose()
myElement.addEventListener("click",()=>{
  window.history.back()
})

         let diff = Math.max(0, 1774433235583 - Date.now());

    let minutes = Math.floor(diff / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);    
function showTimerToClose(){

    

    let value=10

    if(minutes==0 && seconds==0){
        time.style.display="none"
        return
    }

    const cleareTimer=setInterval(()=>{

        if(minutes==0 && seconds==0) {
            clearInterval(cleareTimer)
            time.style.display="none"
            return
        }

        if(seconds < 1){
            minutes--
            seconds=60
        }

       seconds--
       
         time.innerText=`Registration closes soon : ${minutes}:${seconds--}`

    },1000)
   

}
showTimerToClose()







