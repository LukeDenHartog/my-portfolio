secondParagraph = document.getElementById('second-paragraph');
readMoreButton = document.getElementById('read-more');
readMoreButton.addEventListener("click", showMore);
readLessButton = document.getElementById('read-less')
readLessButton.addEventListener("click", showLess)
aboutMeLine = document.querySelector('#first-line')
stockDisplay = document.getElementById('stock-display');


function showMore() {
    secondParagraph.classList.remove("hide-display");
    readMoreButton.classList.add("hide-display");
    readLessButton.classList.remove("hide-display");
    aboutMeLine.classList.remove('straight-line-divider');
    aboutMeLine.classList.add('straight-line-divider-500');
}

function showLess() {
    readLessButton.classList.add("hide-display");
    secondParagraph.classList.add("hide-display");
    readMoreButton.classList.remove("hide-display");
    aboutMeLine.classList.remove('straight-line-divider-500')
    aboutMeLine.classList.add('straight-line-divider')
}
stockVolumeDisplay = document.getElementById('stock-volume')
stockDisplay = document.getElementById('stock-display');
let stockName;
let stockPrice;
let stockVolume;

function fetchData() {
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NEO&apikey=BSQ5XPA9JKRCWZZ4')
    .then(function(response){
        return response.json()
        .then(function(data){
         console.log(data)
         stockName = data["Global Quote"]["01. symbol"]
         stockPrice = data["Global Quote"]["05. price"]
         stockVolume = data["Global Quote"]["06. volume"]
        
        })
       .catch(function(error){
        console.error('Error', error)
       }) 
    })
        
}

fetchData() 

//The setTimout function is to give the API time to make a call for data so the console logs won't be undefined when you load the page.
setTimeout(function() {
    stockDisplay.textContent = `${stockName}: $${stockPrice}  `;
    stockVolumeDisplay.textContent = `Volume: ${stockVolume}`
  console.log(stockName);
  console.log(stockPrice);
  console.log(stockVolume);
}, 2000);
