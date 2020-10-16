//  Currency Api 

document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('form').onsubmit = function() {
        
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const currency = document.querySelector('#currency').value;
        const rate = data.rates[currency];
             if(rate !== undefined){
                 document.querySelector('#result').innerHTML = `<h2>1 USD is equal to ${rate.toFixed(3)} EUR.</h2>`;  

             }else{
                document.querySelector('#result').innerHTML = 'Invalid Currency';
             }
    })

    .catch(error => {
     console.log('Error:', error);
       
    });

        return false;
    }
    
});