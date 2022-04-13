// showImages();

// let images = ['two.jpeg','three.jpeg','four.jpeg'];
// i = 0;
// showImages();
// function showImages(){
//     let image = document.getElementById('galleryImage');
//     setInterval(function(){
//       if(i<3){
//         image.src = `assets/media/images/${images[i]}`;
//         i++;
//       }
//       else{
//         i = 0;
//         image.src = 'assets/media/images/one.jpeg';
//       }
//     },5000);
//   }

let imagesArray = ['two.jpeg','three.jpeg','four.jpeg','one.jpeg'],
    imageElem = document.getElementById('galleryImage'),
    imgCounter = 0,
    imgDuration = 3000;

function showImages(){
    
    setInterval(function(){
      imageElem.className = 'fadeOut';
      setTimeout(function(){
        imageElem.src = `assets/media/images/${imagesArray[imgCounter]}`;
        imageElem.className = '';
      },1000);
      imgCounter++;
      if(imgCounter==imagesArray.length){
        imgCounter=0;
      }
    },imgDuration);

  }

window.onload = showImages();