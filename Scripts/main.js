const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

document.addEventListener('DOMContentLoaded', () => {
    const bookingBtn = document.getElementById('bookingBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close');

    bookingBtn.addEventListener('click', () => {
        bookingModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        bookingModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == bookingModal) {
            bookingModal.style.display = 'none';
        }
    });

    document.getElementById('bookingForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Booking submitted!');
        bookingModal.style.display = 'none';
    });
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    if (name && surname && email && date) {
        const bookingInfo = {
            name: name,
            surname: surname,
            email: email,
            date: date
        };

        localStorage.setItem('booking', JSON.stringify(bookingInfo));
        alert(`Booking confirmed for ${name} ${surname} on ${date}. Confirmation sent to ${email}.`);
        modal.style.display = 'none';
        document.getElementById('bookingForm').reset();
    } else {
        alert('Please fill all fields.');
    }
});

//About Us page, transition script.
function toggleDescription(id) {
    const desc = document.getElementById(id);
    if (desc.style.display === 'block') {
        desc.style.display = 'none';
    } else {
        desc.style.display = 'block';
    }
}

// Animation on scroll
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.box, .card');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (position < screenPosition) {
            element.style.animation = 'slide-in 1s forwards';
        }
    });
});