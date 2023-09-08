var number0fdrum = document.querySelectorAll(".drum").length;



function play_sound(no) {

    if(no == 1){
        var audio = new Audio("sound/tom-3.mp3");
        audio.play();
    }
    if(no == 2){
        var audio = new Audio("sound/kick-bass.mp3");
        audio.play();
    }
    if(no == 3){
        var audio = new Audio("sound/snare.mp3");
        audio.play();
    }
    if(no == 4){
        var audio = new Audio("sound/tom-1.mp3");
        audio.play();
    }
    if(no == 5){
        var audio = new Audio("sound/tom-2.mp3");
        audio.play();
    }
    if(no == 6){
        var audio = new Audio("sound/crash.mp3");
        audio.play();
    }
    if(no == 7){
        var audio = new Audio("sound/tom-4.mp3");
        audio.play();
    }
}