var len = document.querySelectorAll(".btn").length;

for(var i=0; i<len; i++){

var mybtn = document.querySelectorAll(".btn")[i];
mybtn.addEventListener("click",function(){
    var text = this.innerHTML;
    audioPlay(text);
    animation(text);
      
});
}

document.addEventListener("keypress",function(event){
    var text = event.key;
    audioPlay(text);
    animation(text);
});

function audioPlay(text){
    switch(text){
        case "A":
            var audio = new Audio("audios/bass.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "S":
            var audio = new Audio("audios/fl tom.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "D":
            var audio = new Audio("audios/hihat o.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "G":
            var audio = new Audio("audios/hihat.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "H":
            var audio = new Audio("audios/kick.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "J":
            var audio = new Audio("audios/ride.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "K":
            var audio = new Audio("audios/sl tom.mp3");
            audio.currentTime = -5;
            audio.play();
            break;

            case "L":
            var audio = new Audio("audios/snare.mp3");
            audio.currentTime = -5;
            audio.play();
            break;
    }
};

function animation(text){
    var selectButn = document.querySelector("."+text);
    selectButn.classList.add("anim");

    setTimeout(function(){
        selectButn.classList.remove("anim");
    },200);
};



