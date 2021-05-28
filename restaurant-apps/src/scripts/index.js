import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../DATA.json";


console.log("Hello Coders! :)");
console.log(data);

// nav toggle 
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
    const iconBars = document.querySelector('.icon-bars');
    const iconTimes = document.querySelector('.icon-times');
    const navList = document.querySelector('.nav-list');
    console.log('ok');
    iconBars.classList.toggle('hidden');
    iconTimes.classList.toggle('hidden');
    navList.classList.toggle('slide');
});

// nav 
const nav = document.querySelector('nav');
const navImage = document.querySelector('.nav-img')
window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
        nav.classList.add('nav-bg');
        navImage.setAttribute('src', './images/logo-w.svg')
    } else {
        nav.classList.remove('nav-bg');
        navImage.setAttribute('src', './images/logo.svg')
    }
});


data.restaurants.forEach(restaurant => {
    const listRestaurant = document.querySelector('.list-restaurant');
    const maxLengthString = 50;
    let description = restaurant.description;
    let rating = restaurant.rating;
    let stars = Math.floor(rating);
    let startText = '';
    for (let i = 0; i < stars; i++) {
        startText += `<span class="fa fa-star"></span>`;
    }
    for (let i = 0; i < 5 - stars; i++) {
        startText += `<span class="fa fa-star unrate"></span>`;
    }

    startText += `<span> (${rating})</span>`;

    listRestaurant.innerHTML += `
        <article class="restaurant-item card">
            <a href="#">
                <img class="restaurant-thumbnail" src="${restaurant.pictureId}"
                    alt="${restaurant.name}">

                <div class="restaurant-content">
                    <h3 class="restaurant-name text-primary">${restaurant.name}</h3>
                    <h4 class="restaurant-city">${restaurant.city}</h4>
                    <div class="rating">` + startText + `</div>
                    <p>${description.length>maxLengthString? description.substring(0, maxLengthString) + '...':description}</p>
                </div>
            </a>
        </article>
        `
});


// getDate
var date = new Date();
var year = date.getFullYear();
document.querySelector('.year').innerHTML = year;