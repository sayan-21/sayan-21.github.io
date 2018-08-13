let i,txt,speed
let time=1600
let initialise=()=>{ i=0
txt = "HELLO :)  "
speed = 500
document.getElementById("typewriter").innerHTML=""
typeWriter()
}
let typeWriter=()=>{
	if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i)
    i+=1
    setTimeout(typeWriter, speed)
  }
  else{
   document.getElementById("typewriter").innerHTML=txt
  	initialise()
  }
}
initialise()