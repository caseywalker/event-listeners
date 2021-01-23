// console.log('CONNECTED');
// *** DOM Selectors ***
const button = document.querySelector('#main-btn');
const otherButton = document.querySelector('#other-btn');
const container = document.querySelector('#container');

// const handleClick = function(event) {
//   console.log(`You clicked ${event.target.id}`);
// };

// button.addEventListener('click', handleClick)
// *** Event Handlers ***
const whatIsTheId = (event) => {
  console.log(`You clicked ${event.target.id}`);
  if(event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else if (event.target.id === 'other-btn') {
    container.innerHTML = "You clicked the OTHER BUTTON"
  }
}

// *** Event Listeners ***
button.addEventListener('click', whatIsTheId);
otherButton.addEventListener('click', whatIsTheId);
