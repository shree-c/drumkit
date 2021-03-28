
function makesound(press) {
    switch (press) {
        case ("w"):
            var waudio = new Audio("sounds/tom-1.mp3");
            waudio.play();
            break;
        case ("a"):
            var aaudio = new Audio("sounds/tom-2.mp3");
            aaudio.play();
            break;
        case ("s"):
            var saudio = new Audio("sounds/tom-3.mp3");
            saudio.play();
            break;
        case ("d"):
            var daudio = new Audio("sounds/tom-4.mp3");
            daudio.play();
            break;
        case ("j"):
            var jaudio = new Audio("sounds/snare.mp3");
            jaudio.play();
            break;
        case ("k"):
            var kaudio = new Audio("sounds/crash.mp3");
            kaudio.play();
            break;
        case ("l"):
            var laudio = new Audio("sounds/love.mp3");
            laudio.play();
            break;
        default:
            ;
    }
}
var laudio = new Audio("sounds/kick-bass.mp3");
laudio.play();


document.addEventListener("keydown", function(e) {
    makesound(e.key);
})
document.querySelectorAll(".drum").forEach(key => {
    key.addEventListener("click", (e)=>{
        makesound(e.explicitOriginalTarget.innerText)
    })
})
