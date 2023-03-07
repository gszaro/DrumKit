let numOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numOfDrumButtons; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        alert('I got clicked!');
    
    });
    
}



