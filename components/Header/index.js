// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container element

function Header(headerText, tempText) {

    const divHeader = document.createElement('div');
    divHeader.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = headerText;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = tempText; 

    divHeader.appendChild(headerTitle);
    divHeader.appendChild(tempSpan);

    return divHeader;
}

const headerContainer = document.querySelector('.header-container');

const newHeader = Header ('Lambda Times', '98°'); 
console.log(newHeader); 

headerContainer.appendChild(newHeader);