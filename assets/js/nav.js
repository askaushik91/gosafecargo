function showNav(){
    let navigation = document.getElementById('navigation');
    if (navigation.style.display === "block") {
      // navigation.style.display = '@keyframes nav {100% {display:none;}}';
      // navigation.style.display = "none";
    } else {
      navigation.style.display = "block";
      navigation.style.display = 'animation : fade-in 2s';
    }
  }