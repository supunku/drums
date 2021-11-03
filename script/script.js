var drumKey = document.querySelectorAll(".btn");


for (i=0;i<drumKey.length;i++){
    drumKey[i].addEventListener("click",function(){

       var pressBtn = this.textContent;

       playSound (pressBtn);
       animation(pressBtn);
     
    });

   
}

document.addEventListener('keypress',function(e){
    
    
    var keyPress = e.key;
    playSound(keyPress);
    animation(keyPress);
   
})

function playSound (key){
    switch (key) {
        case "a" : 
        var music = new Audio('sounds/kick-bass.mp3') ;
        music.play();
        break;
        case "w":
        var music = new Audio('sounds/snare.mp3') ;
        music.play();
        break;
        case "d":
        var music = new Audio('sounds/tom-1.mp3') ;
        music.play();
        break;
        case "g":
        var music = new Audio('sounds/tom-2.mp3') ;
        music.play();
        break;
        case "y":
        var music = new Audio('sounds/tom-4.mp3') ;
        music.play();
        break;
        case "j":
        var music = new Audio('sounds/tom-3.mp3') ;
        music.play();
        break;
        case "l":
        var music = new Audio('sounds/crash.mp3') ;
        music.play();
        break;
        default: console.log("Error");
    }

    
}


// var music = new Audio('sounds/crash.mp3') ;
//music.play();
function animation (key){
    var button = document.querySelector("."+ key);

    button.classList.add("press");
   setTimeout(function(){
       button.classList.remove("press")
   },300)
    
}