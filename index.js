// Setup DOM Variables
const mainImage = document.querySelector(".slider-container");
const mainHeading = document.querySelector(".slider-heading");
const mainText = document.querySelector(".slider-text");
let screenWidth = 0;
let slides = [];

// Try something new instead of using media queires to change the arrays
// but this way is super wasteful
function resize() {
	screenWidth = window.innerWidth;
	if ((screenWidth > 601) || (screenWidth < 1300) ) {
		show();
	}
}

window.onresize = resize;
// Arrays for mobile and desktop
const slidesOne = [
	{
		image: "images/desktop-image-hero-1.jpg",
	 },
	{
		image: "images/desktop-image-hero-2.jpg",
	},
	{
		image: "images/desktop-image-hero-3.jpg",
	}
]

const slidesTwo = [
	{
		image: "images/mobile-image-hero-1.jpg",
	}, 
	{
		image: "images/mobile-image-hero-2.jpg",
	},
	{
		image: "images/mobile-image-hero-3.jpg",
	}
]

const textArray = 
[
	{
		heading: "Discover innovative ways to decorate",
		text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andr vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
	}, 
	{
		heading: "We are available all across the globe",
		text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
	},
	{
		heading: "Manufactured with the best materials",
		text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
	}
]

let position = 0;

function show() {
	if (screenWidth > 600) {
		slides = slidesOne;
	} else {
		slides = slidesTwo;
	}
	mainHeading.textContent = textArray[position].heading;
	mainText.textContent = textArray[position].text;
	mainImage.style.background = "url('" + slides[position].image + "')";
	mainImage.style.backgroundPosition = "50% 80%";
	mainImage.style.backgroundSize = "cover";
	mainImage.style.backgroundRepeat = "no-repeat";
	mainImage.style.minHeight = "320px";
	mainImage.style.width = "100%";
}
show();


function slideNextImg() {
	position++;
	if (position > slides.length - 1) {
		position = 0;
	} 
  	show();
}

function slidePrevImg() {
  	position--;
	if (position < slides.length - slides.length) {
		position = slides.length - 1;
	} 
 	show();
}

function toggle() {
	let menu = document.querySelector(".navbar");
	let closeIcon = document.querySelector(".close-icon");
	let burgerIcon = document.querySelector(".burger-icon");
	let logo = document.querySelector(".logo");
	menu.classList.toggle("toggle");
	closeIcon.classList.toggle("toggle");
	burgerIcon.classList.toggle("toggle");
	logo.classList.toggle("toggle");
}