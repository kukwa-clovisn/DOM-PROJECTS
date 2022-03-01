let menu_dropDown = document.querySelector('.menu');
let menu_content = document.querySelector('.menu_content');
let main = document.querySelector('.main');
let header = document.querySelector('.header');


// menu_dropDown.addEventListener('click', (e) => {
//     menu_content.style.display = 'block';
// })

// main.addEventListener('click', (e) =>{
//         menu_content.style.display = 'none';
//     })

// carousel content
 // // starting the images from image zero
 let i = 0;
 // // letting the images into an array
 let images = [];
 let images1 = [];
 
 // pushing the images into the image array
 images[0] = "./assets/image.jpg";
 images[1] = "./assets/image1.JPG";
 images[2] = "./assets/image2.jpg";
 images[3] = "./assets/download (3).jpg";
 images[4] = "./assets/image6.jpg";
 images[5] = "./assets/image5.jpg";
 images[6] = "./assets/download.jpg";

  // pushing the images into the image array
  images1[0] = "./assets/download (5).jpg";
  images1[1] = "./assets/image3.JPG";
  images1[2] = "./assets/download (2).jpg";
  images1[3] = "./assets/download (4).jpg";
  images1[4] = "./assets/image4.jpg";
  images1[5] = "./assets/images (2).jpg";
  images1[6] = "./assets/images (3).jpg";

 // // giving a function called image_slide that will cause the image transition.

 function image_slide() {

     document.slide.src = images[i];
     document.slide1.src = images1[i];

 // creationg a condition for looping throung the images

     if(i < images.length - 1) {
         i++;
     } else{
         i = 0; //we want to make sure that the images actually starts from the first image which is images[0]
     }

     setTimeout("image_slide()", 3000);
     } 

     window.onload = image_slide();

     window.onscroll = function () {
         welcome_chat();
     }

     function welcome_chat() {
        if(document.body.scrollTop >700 && document.body.scrollTop < 1200  || document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1200 ) {
            document.querySelector('.welcome').style.visibility = 'visible';
        } else{
            document.querySelector('.welcome').style.visibility = 'hidden';
        }
    }

   