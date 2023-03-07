let numOfDrumButtons = document.querySelectorAll('.drum').length;
let audio = new Audio('sounds.tom-1.mp3');

for (let i = 0; i < numOfDrumButtons; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        
        this.style.color = 'white';
    
    });
    
}






// let audio = new Audio('sounds/tom-1.mp3');
//         audio.play();