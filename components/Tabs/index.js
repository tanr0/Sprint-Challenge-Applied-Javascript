// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabConstructor (cb) {

    const topicTab = document.createElement('div');
    topicTab.classList.add('tab');
    topicTab.textContent = cb ;

    return topicTab;
}


const entry = document.querySelector('.topics')

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);
    response.data.topics.forEach( item => {
        let newTab = tabConstructor(item);
        console.log(newTab);
        entry.appendChild(newTab); 
      })
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });