//declaration and initialization of our variables
var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list
images[0] = 'hammock.jpg';
images[1] = 'cascade.jpg';
images[2] = 'feet.jpg';
images[3] = 'ripple.jpg';
images[4] = 'stackRocks.jpg';

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
