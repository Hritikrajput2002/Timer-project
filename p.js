let btn =document.getElementById("box")
let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let left=document.getElementById("left")
let reset=document.getElementById("reset")
var inp,a,b


var flag=-1
var audio
var i=0
function alarm(para){
    if(flag==-1){
       audio=new Audio("song.mp3");
         flag=0;
    }
    if(para==0){
       audio.play();
    }
    else if(para==1){
        audio.pause()
    }

}


var time,z=0,d=new Date()
// console.log(d.toTimeString())





btn.addEventListener('click',function(){
   btn.disabled=true;
   
    reset.classList.toggle("reset")  
    




   inp= parseInt(60*60*(hour.value)) + parseInt(60*(min.value)) + parseInt(sec.value)
   time=inp
   var temp=time-1
   a=setInterval(()=>{
      if(temp>0){
         left.innerHTML="Alarm will ring in "+temp+" seconds"
         temp--
      }
      else if(temp==0){
         left.innerHTML="Alarm is ringing wakeup"
      }
   },1000)
   
   b=setTimeout(()=>{
      alarm(i)
   },time*1000)
   
    
})



reset.addEventListener('click',function(){
   alarm(1)
   flag=-1
   btn.disabled=false;
   reset.classList.toggle("reset") 
    clearInterval(a)
    clearTimeout(b)
    left.innerHTML=""
    hour.value=0
    min.value=0
    sec.value=0
})

