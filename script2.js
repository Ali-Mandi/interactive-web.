document.addEventListener('DOMContentLoaded', () => {
    alert('Page has loaded!');

    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});