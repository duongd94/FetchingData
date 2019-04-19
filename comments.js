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
  
  let postNumber = 1;
  fetch('https://jsonplaceholder.typicode.com/post/' + postNumber)
	.then(function(response) {
	if (!response.ok){
		console.log('HTTP error: ' + response.status);
	} else{
		return response.json();
	}
	})
	.then(fuction(json) {
		console.log(json);
	})
	.catch(fuction(error){
		console.error('Network error:/n, error);
	});
	
})(window);
