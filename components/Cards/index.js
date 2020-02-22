// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCard (headlineText, imgUrl, authorText) {
    const divHeadline = document.createElement('div');
    divHeadline.classList.add('headline'); 
    divHeadline.textContent = headlineText; 

    const authorDiv = document.createElement('div'); 
    authorDiv.classList.add('author');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');

    const authorImg = document.createElement('img'); 
    authorImg.src = imgUrl;

    const authorSpan = document.createElement('span');
    authorSpan.textContent = authorText; 

    divHeadline.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorSpan);
    imgDiv.appendChild(authorImg);

    return divHeadline;
}
const cardBox = document.querySelector('.cards-container'); 

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.javascript.forEach( item => {
        let newCard = articleCard(item.headline, item.authorPhoto, item.authorName,)
        console.log(newCard);
        cardBox.appendChild(newCard);
    })
    response.data.articles.bootstrap.forEach( item => {
        let newCard = articleCard(item.headline, item.authorPhoto, item.authorName,)
        cardBox.appendChild(newCard);
    })
    response.data.articles.technology.forEach( item => {
        let newCard = articleCard(item.headline, item.authorPhoto, item.authorName,)
        cardBox.appendChild(newCard);
    })
    response.data.articles.jquery.forEach( item => {
        let newCard = articleCard(item.headline, item.authorPhoto, item.authorName,)
        cardBox.appendChild(newCard);
    })
    response.data.articles.node.forEach( item => {
        let newCard = articleCard(item.headline, item.authorPhoto, item.authorName,)
        cardBox.appendChild(newCard);
    })
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

