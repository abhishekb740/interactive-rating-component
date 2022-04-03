 const container1 =  document.querySelector(".container")
 const container2 = document.querySelector(".container2")

 function submit(){
    container1.classList.add("hide")
    container2.classList.remove("hide")
 }
 document.querySelector(".button").addEventListener("click",submit)

 const rated = document.querySelectorAll(".rating1")

 function rating(rate){
     for(var i=0;i<5;i++){
         rated[i].classList.remove("orange")
     }
     rated[rate-1].classList.add("orange")
     document.querySelector(".selected span").innerHTML=`You selected ${rate} out of 5`
     
 }
