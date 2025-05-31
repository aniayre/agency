const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownButton = document.getElementById('dropdownMenuButton');
const contentBoxes = document.querySelectorAll('.content-box');
dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedContentId = this.getAttribute('data-content');

        // Change dropdown button text
        dropdownButton.textContent = this.textContent;

        // Hide all content boxes
        contentBoxes.forEach(box => box.classList.add('d-none'));

        // Show the selected content box
        document.getElementById(selectedContentId).classList.remove('d-none');
    });
});

// logo carasoul

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: false, // optional: hides dots
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
$('.owl-dots').remove();


// number counter

function animateCounter(counter) {
    const target = +counter.getAttribute('data-count');
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;
    const speed = 200;
    const increment = target / speed;

    const span = counter.querySelector('span');
    if (span) span.textContent = suffix;

    const updateCount = () => {
        count += increment;
        if (count < target) {
            counter.childNodes[0].nodeValue = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.childNodes[0].nodeValue = target.toLocaleString('en-US');
        }
    };

    updateCount();
}

const counters = document.querySelectorAll('.counter-number');
let hasAnimated = false;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            counters.forEach(counter => animateCounter(counter));
            hasAnimated = true;
        }
    });
}, {
    threshold: 0.5
});

const counterBox = document.querySelector('.counter-box');
observer.observe(counterBox);

// our team
// owl carsousel
$(document).ready(function () {
    const $carousel = $('.owl-carousel');

    $carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Custom navigation buttons
    $('#customPrevBtn').click(function () {
        $carousel.trigger('prev.owl.carousel');
    });

    $('#customNextBtn').click(function () {
        $carousel.trigger('next.owl.carousel');
    });
});

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
