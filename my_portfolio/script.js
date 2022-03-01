// getting stuffs needed for the script 

let good_news = document.querySelector('#good_news');
let logo = document.querySelector('.logo');
let menu_btn = document.querySelector(".menu_btn");
let menu = document.querySelector('.menu'); 
let home = document.getElementById('home');
let new_name = document.querySelector('#myName');
let toggle_portfolio = document.querySelector('.portfolio');
// let hide_menu = document.querySelector('.menu');
// coding the good news area
logo.addEventListener('click', () =>{
    home.classList.toggle('hide_home');
    good_news.classList.toggle('show_good_news');
    toggle_portfolio.classList.toggle('toggle_portfolio');
})

// creating the show home function
function show_home() {
    home.classList.toggle('hide_home');
    good_news.classList.toggle('show_good_news');
    toggle_portfolio.classList.toggle('toggle_portfolio');
}

// coding the menu button that when clicked should display the menu content

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.querySelector('html').style.scrollBehavior = 'smooth';
})
// coding the header section ====================================================>
window.onscroll = function () {
    change_header_color();
    show_chat();
    
}
function show_chat() {
    if(document.body.scrollTop >500 && document.body.scrollTop < 1500  || document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 1500 ) {
        document.getElementById('chat').style.display = 'block';
    } else{
        document.getElementById('chat').style.display = 'none';
    }
}

// displaying the chat page
let chat = document.querySelector('#chat');
chat.addEventListener('click', () => {
    document.querySelector('.chat_area').classList.toggle('show_chat_area');
})

let hide_chat_area = document.querySelector('.hide_chat_area');

function hide_chat() {
    document.querySelector('#chat_area').classList.toggle('show_chat_area');
}
// about me content=====================================================================>
function pop_about(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('show_content');
    let content = document.getElementById('content');
    content.classList.toggle('blur_content');
}

//coding the carousel ======================================================================================>
  // // starting the images from image zero
//   let i = 0;
//   // // letting the images into an array
//   let images = [];
  
//   // pushing the images into the image array
//   images[0] = "./image/bd5.jpg";
//   images[1] = "./image/clovis.JPG";
//   images[2] = "./image/bg04.jpg";
//   images[3] = "./image/cloviss.JPG";
//   images[4] = "./image/bg7.jpg";
//   images[5] = "./image/bg8.jpg";
//   images[6] = "./image/bg03.jpg";
//   images[7] = "./image/kcn00.png";

//   // // giving a function called image_slide that will cause the image transition.

//   function image_slide() {

//       document.slide.src = images[i];

//   // creationg a condition for looping throung the images

//       if(i < images.length - 1) {
//           i++;
//       } else{
//           i = 0; //we want to make sure that the images actually starts from the first image which is images[0]
//       }

//       setTimeout("image_slide()", 3000);
//       } 

//       window.onload = image_slide();

    //   coding the balloon  content ==================================================>

//     let balloonBg = document.querySelector('.balloon');
//     let click_here = document.querySelector('.click_here');
//     let balloon = document.querySelector('#balloon');
// let explode = document.querySelector('#explode');
// balloon.style.fontSize = '100px';

//      window.addEventListener('keydown', event => {
//         let balloonSize = balloon.style.fontSize.replace(/px$/, '');
//          balloonSize = parseInt(balloonSize);
//          if(event.key == 'k') {
//               balloonSize += 10;
//               balloon.style.fontSize = balloonSize + 'px';
//          } else if(event.key == 'l') {
//              balloonSize -= 2;
//             balloon.style.fontSize = balloonSize + 'px';
//          }  
//          if(balloonSize >= 800) {
//          balloon.style.display = 'none';
//          explode.style.display = 'block';
//          explode.style.fontSize = '700px';
//          click_here.style.display = 'block';
//          balloonBg.style.background = 'mediumseagreen';

//          click_here.addEventListener('click', () => {
//             balloon.style.display = 'flex';
//             explode.style.display = 'none';
//             // explode.style.fontSize = '700px';
//             click_here.style.display = 'none';
//             balloonBg.style.background = '';
//             balloon.style.fontSize = '100px';
//          })
//      }
//      });


    window.onload = change_sample();

      