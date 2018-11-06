//declaration and initialization of our variables
var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list
images[0] = 'marriage.jpg';
images[1] = 'love.jpeg';
images[2] = 'couple.jpeg';
images[3] = 'heartLock.jpg';
images[4] = 'hands.jpeg';
images[5] = 'math.jpg';

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