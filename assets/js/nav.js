// function showNav(){
//     let navigation = document.getElementById('navigation');
//     if (navigation.style.display === "block") {
//       navigation.style.display = 'none'

//     } else {
//       navigation.style.display = "block";
//     }
//   }

function showNav(){
  let navigation = document.getElementById('navigation');
  if (Array.from(navigation.classList).includes('navActive')) {
    navigation.classList.remove('navActive');

  } else {
    navigation.classList.add('navActive');
  }
}
