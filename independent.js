//declaration and initialization of our variables
var i = 0;
var images = [];
var time = 3000; //time in milliseconds

//image list
images[0] = 'independentwo.jpg';
images[1] = 'marilynindependent.jpg';
images[2] = 'wecandoit.jpg';
images[3] = 'wonderWoman.jpg';
images[4] = 'karliekloss.jpg';


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