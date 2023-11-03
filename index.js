const button = document.getElementById('myButton');

button.addEventListener(('click'), () => {
    button.disabled = true;

    // if you want to show text for loading 
    // button.textContent = 'Loading...' 

    // if you want to show loading
    button.textContent = button.classList.add('loader');

    setTimeout(()=>{
        button.classList.remove('loader'); // if text comment this line
        button.disabled = false; 
        button.textContent = 'Submit';
    }, 2000);
})