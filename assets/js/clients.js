let reviews = [
    { name : 'Aditya Bansal',
      reply : "I don't usually write reviews but yesgo is definitely helped me in every possible way",
    },
    { name : 'Aditya Bansal',
      reply : "I don't usually write reviews but yesgo is definitely helped me in every possible way",
    },
    { name : 'Aditya Bansal',
      reply : "I don't usually write reviews but yesgo is definitely helped me in every possible way",
    },
    { name : 'Aditya Bansal',
      reply : "I don't usually write reviews but yesgo is definitely helped me in every possible way",
    },
    { name : 'Aditya Bansal',
      reply : "I don't usually write reviews but yesgo is definitely helped me in every possible way",
    },
  ]

let clientsContentDiv = document.getElementById('clientsContentDiv');
let htmlContent = '';
reviews.forEach(function(element){
    htmlContent += `<div class="individualReview">
                        <h3>${element.name}</h3>
                        <p>${element.reply}</p>
                    </div>`;
});
clientsContentDiv.innerHTML = htmlContent;