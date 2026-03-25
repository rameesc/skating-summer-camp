

const popup=document.getElementsByClassName("global")[0]
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






