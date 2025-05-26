const heading = document.getElementById('heading');
const input = document.getElementById('inputField');

input.addEventListener('input', function(e) {
    heading.innerText = "Hello " + e.target.value + ", welcome to the site!";})

//the gentlehands of bata