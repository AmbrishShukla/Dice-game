// generating random numbers 
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

// changing the name of the src based on the random number generated
var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

// changin the attribute based on the random number generated
document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);


// changing the players name and declaring the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😊Ankit won";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Kriti won😊 "
}
else {
    document.querySelector("h1").innerHTML = "Draw 😑"
}

