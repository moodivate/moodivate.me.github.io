//declaration and initialization of our variables
var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list
images[0] = 'arms.jpg';
images[1] = 'fistbump.jpeg';
images[2] = 'flashcards.jpg';
images[3] = 'lightbulbCloud.jpg';
images[4] = 'rocks.jpg';
images[5]='success.jpg';

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