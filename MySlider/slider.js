//Get elements
const arrows=document.querySelector("#arrows");
const carName=document.querySelector("#carName");
const carImage=document.querySelector("#carImage");
const bothArrows=document.querySelectorAll("i");


//Init variables
const images=["../img/araba1.jpg","../img/araba2.jpg","../img/araba3.jpg","../img/araba4.jpg","../img/araba5.jpg"];
const carNames=["Araba1","Araba2","Araba3","Araba4","Araba5"];
let index=0;
const duration=1000;
let interval;

eventListeners();
changeCarAuto(duration);

//Stop changing cars when mouse is hovered
function stopChangingCars(){
    clearInterval(interval);
    console.log("mouseenter");
}

//changeCarAuto
function changeCarAuto(duration){
    
    interval=setInterval(function(){
        
        index=checkIndexRight(index);
        carImage.setAttribute("src",images[++index]);
        changeCarName(index);
        console.log("mouseout");

    },duration)

}

//Check index right
function checkIndexRight(index){
    if(index===images.length-1){
        return -1;
    } else{
        return index;
    }
}

//Check index left
function checkIndexLeft(index){
    if(index===0){
        return images.length;
    } else{
        return index;
    }

}

//Change car name
function changeCarName(index){
    carName.textContent=carNames[index];
}

//Change car image
function changeImage(e){
    
    if(e.target.className==="fas fa-arrow-right"){

        index=checkIndexRight(index);
        carImage.setAttribute("src",images[++index]);
        changeCarName(index);

    } else if(e.target.className==="fas fa-arrow-left"){

        index=checkIndexLeft(index);
        carImage.setAttribute("src",images[--index]);
        changeCarName(index);

    }

    e.preventDefault();

}

//Init eventlisteners
function eventListeners(){
    arrows.addEventListener("click",changeImage);
    bothArrows.forEach(function(element){
        element.addEventListener("mouseenter",stopChangingCars);
        
    })
    bothArrows.forEach(function(element){
        element.addEventListener("mouseleave",function(){
            changeCarAuto(duration);
        });
        
    })
}
