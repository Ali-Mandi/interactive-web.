// filepath: /C:/Users/Dcc7h/assignment/script.js
window.onload = function () {
    alert("Welcome to the interactive web page!");
};
document.addEventListener('DOMContentLoaded', () => {
    alert('Page has loaded!');

    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});
