//select the elemet
let squarediv = document.querySelector('.square')
// add an event
squarediv.onclick = function(){
    squarediv.style.backgroundColor = "magenta" 
}

//select the element
let btnanimal = document.querySelector(".btnanimal")
let animalsdiv = document.querySelector(".animalsdiv")

// list of animals
let animals = ['fish','dog','turtle','cat','spider']
// add event
btnanimal.onclick = function(){
    animalsdiv.textContent = animals[Math.floor(math.random()*4)]
}

// MOUSE EVENT
// select the element
let numberdiv = document.querySelector(".numberdiv")
// add an event
numberdiv.onmouseout = function(){
    numberdiv.textContent = Math.ceil(Math.random()*99)
}
// function to randomly pick a number
function pickcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}
//add a click event
numberdiv.onclick = function(){
    numberdiv.style.backgroundColor = pickcolor()
}

// EXERCISE
//set counter
let counter = 0; // Start at 0
let circle = document.querySelector(".circle");
let resetButton = document.querySelector(".resetButton");

circle.onmouseout = function() {
    if (counter < 99) {
        counter++;
    }
    circle.textContent = counter;
}

circle.onclick = function() {
    if (counter < 99) {
        counter++;
    }
    circle.textContent = counter;
}

// Reset button functionality
resetButton.onclick = function() {
    counter = 0;
    circle.textContent = counter;
}