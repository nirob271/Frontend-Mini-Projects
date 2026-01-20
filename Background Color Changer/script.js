const parent = document.getElementById('parent');

parent.addEventListener('click', function(e) { 
    const child = e.target; // Corrected the variable name
    const body = document.querySelector('body');
    body.style.backgroundColor = child.id;
});