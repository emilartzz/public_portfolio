if (document.cookie.indexOf('sorry-message=hide') > -1) {
   document.querySelector('#sorry-message').style.display = 'none';
}

function init() { 

   // Add click event listener to the sorry message button and set cookie
   document.querySelector('#sorry-message button').addEventListener('click', function() {
      document.querySelector('#sorry-message').style.opacity = 0;
      // Set opacity to 0 and then hide the element after the transition is complete
      setTimeout(function() {
         document.querySelector('#sorry-message').style.display = 'none';
      }, 500);
      // Set cookie to hide the sorry message
      document.cookie = 'sorry-message=hide; expires=Sun, 31 Dec 2023 23:59:59 GMT';
   });

}

document.addEventListener('DOMContentLoaded', init);