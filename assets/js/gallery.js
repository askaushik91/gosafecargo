showImages();

let images = ['two.jpeg','three.jpeg','four.jpeg'];
i = 0;
function showImages(){
    let image = document.getElementById('image');
    setInterval(function(){
      if(i<3){
        image.src = `assets/media/images/${images[i]}`;
        i++;
      }
      else{
        i = 0;
        image.src = 'assets/media/images/one.jpeg';
      }
    },3000);
  }

    