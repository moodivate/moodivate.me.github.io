//declaration and initialization of our variables
var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list
images[0] = 'babySmile.jpg';
images[1] = 'happyBalloon.jpg';
images[2] = 'happyKids.jpeg';
images[3] = 'jump.jpg';
images[4] = 'happyinmirror.jpeg';

//function that changes our image
function changeImg(){
    document.slide.src=images[i];
    
    if (i < images.length-1){
        i++;
    }else{
        i=0;
    }
    
setTimeout("changeImg()", time);
}

window.onload = changeImg;
