(function() {
    console.log("Made by Javelin Web Designs (I'm the head of that too btw so I made this site). I also made almost the exact same one for someone else so if you ever talk to @ShiayaRBLX then yeah we have similar portfolios. Good job if you read all that")

    var index = 1;

    var leftButton = document.getElementById("left");
    var rightButton = document.getElementById("right");

    function left() {
        if (index === 1) {
            index = 10;
        } else {
            index--;
        };

        var path = "assets/videos/" + index + ".mov";
        var video = document.getElementById("video")
        
        video.setAttribute("src", path)
    };

    function right() {
        if (index === 10) {
            index = 1;
        } else {
            index++;
        };

        var path = "assets/videos/" + index + ".mov";
        var video = document.getElementById("video")
        
        video.setAttribute("src", path)
    };

    leftButton.addEventListener('click', left);
    rightButton.addEventListener('click', right);
})()