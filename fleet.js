// timing greet
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // Adjust for India Standard Time (IST) which is UTC+5:30
    const utcHour = now.getUTCHours();
    const utcMinute = now.getUTCMinutes();
    let indiaHour = (utcHour + 5) % 24;
    let indiaMinute = utcMinute + 30;

    if (indiaMinute >= 60) {
        indiaHour = (indiaHour + 1) % 24;
        indiaMinute -= 60;
    }

    if (indiaHour >= 12 && indiaHour < 17) { // 12:00 PM to 4:59 PM IST
        return "Good Afternoon";
    } else if (indiaHour >= 5 && indiaHour < 12) { // 5:00 AM to 11:59 AM IST
        return "Good Morning";
    } else { // 5:00 PM to 4:59 AM IST (next day)
        return "Good Evening";
    }
}

// Get the greeting and display it (e.g., in a console or on a webpage)
const greeting = getGreeting();
console.log(greeting);

// To display on a webpage, you can do something like this:
document.getElementById('greeting').innerHTML = `${greeting}! Welcome to GoToGo Fleet`;

// const slider = document.getElementById('imageSlider');
//     let index = 0;

//     function slideImages() {
//         index++;
//         if (index === slider.children.length) {
//             index = 0;
//         }
//         const offset = index * -100;
//         slider.style.transition = 'transform 1s ease-in-out';
//         slider.style.transform = `translateX(${offset}%)`;
//     }

//     setInterval(slideImages, 3000); // Change image every 3 seconds
let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    index += step;

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    const offset = index * -100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
