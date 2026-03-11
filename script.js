document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('You clicked: ' + this.textContent);
        });
    });
});