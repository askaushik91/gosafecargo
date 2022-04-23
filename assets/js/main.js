//services object used to for replcament in the serTab (comprosises of serTabHead and serTabContent)
let services = {
  corporate : 'We are the fastest growing corporate shifter in India and Big brands trust us for their shifting needs.',
  car : 'Want your cars to be transported somewhere else?<br>Guess what, We do that too.',
  bike : 'Well not just cars we transport bikes too<br>So what are you waiting for?',
  warehouse : 'We are here for all your warehousing needs as well.',
  household : 'Shifting to new house?<br> Well we are here to help you to shift with extra care.',
  packing : 'You name it.<br>We pack and ship it.<br>Right at your doorstep.',
}

// serNameArray is used for 
let serNameArray = ['corporate','car','transport','warehouse','household','packing'];

let reviews = [
  { name : 'Aditya Bansal',
    reply : "I don't usually write reviews but yesgo is definitely helped me in every possible way"
  },
  { name : 'Surbhi Mankad',
    reply : 'Thanks yesgo'
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
// serviceAuto();

let serTab = document.getElementById('serTab')
let serList = document.getElementsByClassName('indiService');
let serTabHead = document.getElementById('serTabHead');
let serTabContent = document.getElementById('serTabContent');

let custName = document.getElementById('custName');
let custReply = document.getElementById('custReply');

Array.from(serList).forEach(function(element){
    element.addEventListener('click',showService);
    element.addEventListener('blur',resetService);
})

function showService(e){
  Array.from(serList).forEach(function(element){
    element.classList.remove('activeTab')
  })
  document.querySelectorAll('.hiddenPara').forEach(function(element){
    element.style.display = 'none';
  })


  let currElem = document.getElementById(e.target.id);
  currElem.classList.add('activeTab');
  let currElemText = currElem.innerText;
  serTabHead.innerText = currElemText;
  serTabContent.innerHTML = services[e.target.id];


  let elem = document.createElement('div');
  elem.className = 'hiddenPara';
  let elemPara = document.createElement('p');
  elemPara.innerHTML = services[e.target.id];
  elem.append(elemPara);
  currElem.append(elem);
}



// function serviceAuto(){
//   let count = 0;
//   let serList = document.getElementById('serList');
//   setInterval(function(){
//       Array.from(serList.children).forEach(function(element){
//           element.className = '';
//       })
//       if(count==0){
//         serList.children[count].className = 'serActive';
//       }
//       else{
//         serList.children[count-1].className = '';
//         serList.children[count].className = 'serActive';
//       }
//       let currElem = document.getElementById(serNameArray[count]);
//       serTabHead.innerText = currElem.innerText;
//       serTabContent.innerHTML = services[serNameArray[count]];
//       count++;
//       if(count==5){
//         setTimeout(function(){
//           serviceAuto();
//           count=0;
//         },2000)
//       }
//   },2000);
// }

let serListArea = document.getElementById('serList');
serListArea.addEventListener('mouseenter',serviceAutoStop)
serListArea.addEventListener('mouseleave',serviceAuto)

let serviceInterval = setInterval(function(){console.log('hello')},1000);

function serviceAuto(){
  let serviceInterval = setInterval(function(){console.log('hello')},1000);
}
function serviceAutoStop(){
  clearInterval(serviceInterval);
}


function resetService(){
  Array.from(serList).forEach(function(element){
    element.classList.remove('activeTab')
  })
  serTabHead.innerText = 'Top Notch Services';
  serTabContent.innerHTML = 'Helping People Shift<br/>Since 2019';
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
      custReply.innerText = "The process was totally hasslefree. I'm glad that I chose yesgo for this.";
    }
  },3000);
}