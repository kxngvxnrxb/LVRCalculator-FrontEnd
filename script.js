document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    function onSubmitButton() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const data = {
            username: username,
            password: password
          };
        
          fetch('https://localhost:7011/Auth/createtoken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Login successful:', data); // Redirect to LVR Calculator Page
            // Add data and save to cookies as token data
            localStorage.setItem('token', data.data);
            window.location.href = "calculatelvr.html";
            // You can do something with the response data here, like redirecting the user to a different page
          })
          .catch(error => {
            console.error('There was a problem with the login:', error);
            // Handle errors here, such as displaying an error message to the user
          });
    };

    

      document.getElementById('submit').addEventListener('click', onSubmitButton);

});
