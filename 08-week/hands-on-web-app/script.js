const todayBtn = document.querySelector('#todayButton');
const dateBtn = document.querySelector('#dateButton');
const dateInput = document.querySelector('#dateInput');
const title = document.querySelector('#title');
const image = document.querySelector('#image');
const description = document.querySelector('#description');

image.style.display = 'none';

todayBtn.addEventListener('click', () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ekMXaqv07nQTAzG5sR5KgswgDEBvOa3IHXLJXbrv')
        .then(response => response.json())
        .then(data => {
            title.textContent = data.title;
            image.src = data.url;
            image.style.display = 'block';
            description.textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching data:', error));
}); 

dateBtn.addEventListener('click', () => {
    const date = dateInput.value;
    fetch(`https://api.nasa.gov/planetary/apod?api_key=ekMXaqv07nQTAzG5sR5KgswgDEBvOa3IHXLJXbrv&date=${date}`)
        .then(response => response.json())
        .then(data => {
            title.textContent = data.title;
            image.src = data.url;
            image.style.display = 'block'; 
            description.textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching data:', error));
});