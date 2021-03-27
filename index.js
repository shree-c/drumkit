// for (var i = 0; i < document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function funn() {
//         var drumletter = this.innerHTML;
//         makesound(drumletter);
//         animation(drumletter);
//     })
// }
//the above function using jQery:
$("button").click(function (e) {
    var drumletter = $("button").html();

    makesound(drumletter);
    animation(drumletter);

});
// document.addEventListener("keydown", function funn(event) {
//     var keyy = event.key;
//     makesound(keyy);
//     animation (keyy);

// })
$(document).keydown(function (e) {
    var keyy = e.key;

    makesound(keyy);
    animation(keyy);
});
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
            var laudio = new Audio("sounds/kick-bass.mp3");
            laudio.play();
            break;
        default:
            ;





    }
}
function animation(pressed) {
    var activebutton = $("." + pressed)


    $(activebutton).addClass("pressed");
    setTimeout(() => {
        $(activebutton).removeClass("pressed");
    }, 100);

}