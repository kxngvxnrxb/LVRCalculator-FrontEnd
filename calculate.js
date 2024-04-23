document.addEventListener("DOMContentLoaded", function() {
function calculateLVR() {
    const propertyValue = document.getElementById("propertyvalue").value;
    const loanAmount = document.getElementById("loanvalue").value;

    const data = {
        propertyValue: parseFloat(propertyValue),
        loanAmount: parseFloat(loanAmount)
      };
    
      fetch('https://localhost:7011/api/Property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
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
        document.getElementById('resultPropertyValue').innerHTML = propertyValue;
        document.getElementById('resultLoanValue').innerHTML = loanAmount;
        document.getElementById('lvrValue').innerHTML = data.data;
        console.log('LVR calculated:', data);
       //display result;
      })
      .catch(error => {
        console.error('There was a problem with the API:', error);
        // Handle errors here, such as displaying an error message to the user
      });
  };

  document.getElementById('calculatelvr').addEventListener('click', calculateLVR);
});