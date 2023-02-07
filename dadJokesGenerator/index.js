var btnEl = document.getElementById('btn');
var jokeEl = document.getElementById('joke');
const apiKey = 'kaWUZEhrRo17aPvWuXdb1A==IvFhkU1IefnZk0Hb';
async function getTheJoke(){
    try {
        jokeEl.innerText = 'Please wait...';
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;
    const options = {
        method:'GET',
        headers:{
            "X-Api-Key": apiKey,
        },
    };
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', options);
        const data = await response.json();
        jokeEl.innerText = data[0].joke;
      
        
    } catch (error) {
        jokeEl.innerText ="Error Occured.Please try again."
        
    }
    btnEl.innerText = 'Click Me';
    btnEl.disabled = false;

    
}
btnEl.addEventListener('click', getTheJoke);
