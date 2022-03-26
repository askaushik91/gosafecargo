let services = {
  corporate : 'We are the fastest growing corporate shifter in India and Big brands trust us for their shifting needs.',
  household : 'Shifting to new house?<br> Well we are here to help you to shift with extra care.',
  packing : 'You name it.<br>We pack and ship it.<br>Right at your doorstep.',
  car : 'Want your cars to be transported somewhere else?<br>Guess what, We do that too.',
  transport : 'We have partenered with the best transportation services in India and we operate pan India.',
  warehouse : 'We are here for all your warehousing needs as well.',
}
let reviews = [
  { name : 'Aditya Bansal',
    reply : "I don't usually write reviews but gosafe is definitely helped me in every possible way"
  },
  { name : 'Surbhi Mankad',
    reply : 'Thanks gosafe'
  },
  { name : 'Sarvalpalli',
    reply : 'Abhishek was very helpful with the shifting'
  },
  { name : 'Maanik Aggarwal',
    reply : 'Totally a lifesaver'
  },
  { name : 'Aaina Kapoor',
    reply : 'Thank you for giving extra care to my collectibles'
  },
]

let i=0; // For review automatic movement
showRev();


let serList = document.getElementsByClassName('indiService');
let serTab = document.getElementById('serTab');
let serTabHead = document.getElementById('serTabHead');
let serTabContent = document.getElementById('serTabContent');

let custName = document.getElementById('custName');
let custReply = document.getElementById('custReply');

Array.from(serList).forEach(function(element){
    element.addEventListener('mouseover',showService);
    element.addEventListener('blur',resetService);
})

function showService(e){
  currElem = document.getElementById(e.target.id);
  currElemText = currElem.innerText;
  serTabHead.innerText = currElemText;
  serTabContent.innerHTML = services[e.target.id];
}

function resetService(){
  serTabHead.innerText = 'Top Notch Services';
}

function showRev(){
  setInterval(function(){
    if(i<5){
      custName.innerText = reviews[i].name;
      custReply.innerText = reviews[i].reply;
      i++;
    }
    else{
      i = 0;
      custName.innerText = 'Krishna';
      custReply.innerText = "The process was totally hasslefree. I'm glad that I chose gosafe for this.";
    }
  },3000);
}

function showNav(){
  let navigation = document.getElementById('navigation');
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
}