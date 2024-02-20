 // Controls the left side bars movement
let count = 0;

document.getElementById('indexFilterButton').addEventListener('click', function() {
    this.classList.toggle('active');
    
    document.getElementById('indexLeftSideFilter').classList.toggle('active');
    if (count === 0) {
        document.getElementById('indexFilterButton').textContent = '>';
    } else if (count === 1) {
        document.getElementById('indexFilterButton').textContent = '<';
    }
    count = (count + 1) % 2; // Toggle between 0 and 1
});