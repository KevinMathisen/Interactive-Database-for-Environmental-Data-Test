
    // Controls the left side bars movement
let count = 0;

document.getElementById('clickButton').addEventListener('click', function() {
    this.classList.toggle('active');

    document.getElementById('filter').classList.toggle('animate');
    if (count === 0) {
        document.getElementById('clickButton').textContent = '>';
    } else if (count === 1) {
        document.getElementById('clickButton').textContent = '<';
    }
    count = (count + 1) % 2; // Toggle between 0 and 1
});


    // Gets a dad joke and puts it in on the webpage
document.getElementById('removeThis').addEventListener('click', function() {
    document.getElementById('afsidg').classList.toggle('aiaiaiai');
});


document.getElementById('dadJoke').addEventListener('click', function() {
    getDadJoke();
});

const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {    
        headers: {
            'Accept': 'application/json'
        }
    });

    const Joke = await response.json();
    document.getElementById('dadJoke').textContent = Joke.joke;
};