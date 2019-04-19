(function (window) {
  'use strict';

  const BUTTON_SELECTOR = '[data-posts="id"]';

  let buttons = document.querySelectorAll(BUTTON_SELECTOR);

  buttons.forEach(function (button) {
    'use strict';

    let sectionSelector = `#comments-${button.value}`;
    let commentSection = document.querySelector(sectionSelector);

    button.addEventListener('click', function (event) {
      if (commentSection.hidden) {
        commentSection.hidden = false;
        button.textContent = 'Hide comments';
      } else {
        commentSection.hidden = true;
        button.textContent = 'Show comments';
      }

      event.preventDefault();
    });
  });
  
  // let postnumber = 0;
  // fetch('https://jsonplaceholder.typicode.com/post/' + postnumber)
	// .then(function(response) {
	// if (!response.ok){
		// console.log('http error: ' + response.status);
	// } else{
		// return response.json();
	// }
	// })
	// .then(fuction(json) {
		// console.log(json);
	// })
	// .catch(fuction(error){
		// console.error('network error:/n, error);
	// });
	let postnumber = 0;
  fetch('https://jsonplaceholder.typicode.com/post/' + postnumber)
	.then(response => response.json())
	.then(json => console.log(json))
	
})(window);
