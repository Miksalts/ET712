// Get references to the buttons
const alertButton = document.getElementById("alertButton");
const promptButton = document.getElementById("promptButton");
const confirmButton = document.getElementById("confirmButton");

// Function to show an alert
alertButton.addEventListener("click", function() {
    alert("Welcome to the Amazing Adventure of Learning!");
});

// Function to show a prompt
promptButton.addEventListener("click", function() {
    const userName = prompt("What's your name?");
    if (userName) {
        alert("Hello, " + userName + "! Let's start learning!");
    } else {
        alert("No name entered.");
    }
});

// Function to show a confirm dialog
confirmButton.addEventListener("click", function() {
    const userResponse = confirm("Are you ready to start your learning adventure?");
    if (userResponse) {
        alert("Great! Let's go!");
    } else {
        alert("No problem! Take your time.");
    }
});

// Function to handle click events and update the counter
function setupClickCounter(animalId, countId) {
    const animalElement = document.getElementById(animalId);
    const countElement = document.getElementById(countId);
    let count = 0;

    animalElement.addEventListener('click', function() {
        count++;
        countElement.textContent = count; // Update the displayed count
    });
}

// Initialize click counters for each animal
setupClickCounter('cat', 'catCount');
setupClickCounter('dog', 'dogCount');
setupClickCounter('cow', 'cowCount');

// Function to open the modal and set its content
function openModal(letter, description, imageSrc) {
    // Set the modal title, description, and image source
    document.getElementById('modalTitle').innerText = letter;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageSrc;

    // Display the modal
    document.getElementById('alphabetModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('alphabetModal').style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('alphabetModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize the current slide index
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    // Get all slides
    const slides = document.querySelectorAll('.slide');
    
    // Ensure the index is within the valid range
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop back to the last slide
    } else {
        currentSlide = index; // Set current slide to the given index
    }

    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? 'block' : 'none';
    });
}

// Function to show the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to show the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Show the first slide initially
showSlide(currentSlide);

// Existing functions for modal
function openModal(letter, description, imageSrc) {
    document.getElementById('modalTitle').innerText = letter;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('alphabetModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('alphabetModal').style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('alphabetModal');
    if (event.target === modal) {
        closeModal();
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}
// Show or hide the return to top button based on scroll position
window.onscroll = function() {
    const button = document.getElementById('returnToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block'; // Show button
    } else {
        button.style.display = 'none'; // Hide button
    }
};