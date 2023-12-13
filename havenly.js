let B1=document.getElementById("B1")
let B2=document.getElementById("B2")
let Arrow=document.getElementById("K1");
console.log(Arrow);
B2.addEventListener("click",()=>{
  B1.style.display="block"
  Arrow.style=` transform: rotate(180deg);
  bottom: 176px;`
  
})

Arrow.addEventListener("click",()=>{
    B1.style.display="none"
    Arrow.style=` transform: rotate(0deg);
 `
})
 
///



  //


  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//
//
//

let couch=document.getElementById("couch")
let utensiles=document.getElementById("utensiles")
let bed=document.getElementById("bed")

let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")

couch.addEventListener("click",()=>{
  couch.style.backgroundColor=`#f9debe`
  utensiles.style.backgroundColor=``
  bed.style.backgroundColor=``
  one.style.display=`block`
  two.style.display=`none`
  three.style.display=`none`
})

utensiles.addEventListener("click",()=>{
  couch.style.backgroundColor=``
  utensiles.style.backgroundColor=`#f9debe`
  bed.style.backgroundColor=``
  one.style.display=`none`
  two.style.display=`block`
  three.style.display=`none`
})

bed.addEventListener("click",()=>{
  couch.style.backgroundColor=``
  utensiles.style.backgroundColor=``
  bed.style.backgroundColor=`#f9debe`
  one.style.display=`none`
  two.style.display=`none`
  three.style.display=`block`
})

//
//
//


let K1=document.getElementById("KK1")
let K2=document.getElementById("K2")
let K3=document.getElementById("K3")
let K4=document.getElementById("K4")
let K5=document.getElementById("K5")



let SEC1=document.getElementById("SEC1")
let SEC2=document.getElementById("SEC2")
let SEC3=document.getElementById("SEC3")
let SEC4=document.getElementById("SEC4")
let SEC5=document.getElementById("SEC5")


K1.addEventListener("click",()=>{
  K1.style=`color:black; border-bottom: 4px solid black;`
  K2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K3.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K4.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K5.style=`color:rgb(129, 127, 127); border-bottom: ;`
  SEC1.style.display=`block`
  SEC2.style.display=`none`
  SEC3.style.display=`none`
  SEC4.style.display=`none`
  SEC5.style.display=`none`

})

K2.addEventListener("click",()=>{
  K1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  K2.style=`color:black; border-bottom: 4px solid black;`
  K3.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K4.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K5.style=`color:rgb(129, 127, 127); border-bottom: ;`
  SEC1.style.display=`none`
  SEC2.style.display=`block`
  SEC3.style.display=`none`
  SEC4.style.display=`none`
  SEC5.style.display=`none`
})
K3.addEventListener("click",()=>{
  K1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  K2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K3.style=`color:black; border-bottom: 4px solid black;`
  K4.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K5.style=`color:rgb(129, 127, 127); border-bottom: ;`
  SEC1.style.display=`none`
  SEC2.style.display=`none`
  SEC3.style.display=`block`
  SEC4.style.display=`none`
  SEC5.style.display=`none`
})
K4.addEventListener("click",()=>{
  K1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  K2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K3.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K4.style=`color:black; border-bottom: 4px solid black;`
  K5.style=`color:rgb(129, 127, 127); border-bottom: ;`
  SEC1.style.display=`none`
  SEC2.style.display=`none`
  SEC3.style.display=`none`
  SEC4.style.display=`block`
  SEC5.style.display=`none`
})
K5.addEventListener("click",()=>{
  K1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  K2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K3.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K4.style=`color:rgb(129, 127, 127); border-bottom: ;`
  K5.style=`color:black; border-bottom: 4px solid black;`
  SEC1.style.display=`none`
  SEC2.style.display=`none`
  SEC3.style.display=`none`
  SEC4.style.display=`none`
  SEC5.style.display=`block`
})

//
//



let AK1=document.getElementById("AK1")
let AK2=document.getElementById("AK2")
let AK3=document.getElementById("AK3")

let ART1=document.getElementById("ART1")
let ART2=document.getElementById("ART2")
let ART3=document.getElementById("ART3")


AK1.addEventListener("click",()=>{
  AK1.style=`color:black; border-bottom: 4px solid black;`
  AK2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  AK3.style=`color:rgb(129, 127, 127); border-bottom: ;`

  ART1.style.display=`block`
  ART2.style.display=`none`
  ART3.style.display=`none`
  

})

AK2.addEventListener("click",()=>{
  AK1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  AK2.style=`color:black; border-bottom: 4px solid black;`
  AK3.style=`color:rgb(129, 127, 127); border-bottom: ;`
  
  ART1.style.display=`none`
  ART2.style.display=`block`
  ART3.style.display=`none`
  
})
AK3.addEventListener("click",()=>{
  AK1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  AK2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  AK3.style=`color:black; border-bottom: 4px solid black;`
 
  ART1.style.display=`none`
  ART2.style.display=`none`
  ART3.style.display=`block`
 
})
//
//



let BS1=document.getElementById("BS1")
let BS2=document.getElementById("BS2")
let BS3=document.getElementById("BS3")

let BSK1=document.getElementById("BSK1")
let BSK2=document.getElementById("BSK2")
let BSK3=document.getElementById("BSK3")


BS1.addEventListener("click",()=>{
  BS1.style=`color:black; border-bottom: 4px solid black;`
  BS2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  BS3.style=`color:rgb(129, 127, 127); border-bottom: ;`

  BSK1.style.display=`block`
  BSK2.style.display=`none`
  BSK3.style.display=`none`
  

})

BS2.addEventListener("click",()=>{
  BS1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  BS2.style=`color:black; border-bottom: 4px solid black;`
  BS3.style=`color:rgb(129, 127, 127); border-bottom: ;`
  
  BSK1.style.display=`none`
  BSK2.style.display=`block`
  BSK3.style.display=`none`
  
})
BS3.addEventListener("click",()=>{
  BS1.style=`color:rgb(129, 127, 127); border-bottom: none;`
  BS2.style=`color:rgb(129, 127, 127); border-bottom: ;`
  BS3.style=`color:black; border-bottom: 4px solid black;`
 
  BSK1.style.display=`none`
  BSK2.style.display=`none`
  BSK3.style.display=`block`
 
})






