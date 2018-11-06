//declaration and initialization of our variables
var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list
images[0] = 'busy.jpeg';
images[1] = 'floorcrying.jpeg';
images[2] = 'happyfriends.jpeg';
images[3] = 'library.jpeg';
images[4] = 'relaxedcouch.jpeg';
images[5] = 'coffee.jpeg';


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