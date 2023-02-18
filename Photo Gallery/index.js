const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
const errorEl = document.getElementById('errorMessage');
const galEl = document.getElementById('gallery');
btnEl.addEventListener('click', getImage);
const apiKey = 'ukpMZong7Kzd74Gxpfcj1q5yJ0BGROG0HMHWOJS2Cmg';
async function getImage() {
    try {
        btnEl.style.display = 'none';
        galEl.style.display = 'block';
        galEl.innerHTML = '<img src="loading.svg" />'
        var img = "";
    var value = inputEl.value;
    if (value > 10 || value == 0){
        errorEl.style.display = 'block';
        errorEl.innerText = 'Please enter a number between 1 and 10!';
        return;
    }
    const response = await fetch(`https://api.unsplash.com/photos?per_page=${value}&page=${Math.round(Math.random()*1000)}&client_id=${apiKey}`);
    const data = await response.json();
    if (data){
    data.forEach((pic) => {
        img += `<img src="${pic.urls.regular}" alt="picture"/>`
    });
    galEl.style.display = 'block';
    galEl.innerHTML = img;
    btnEl.style.display = 'block';
    }
        
    } catch (error) {
        errorEl.style.display = 'block';
        btnEl.style.display = 'block';
    }
    

}
