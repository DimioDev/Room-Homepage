const slider = document.querySelector(".hero");
const sliderPrev = document.querySelector(".arrow-left");
const sliderNext = document.querySelector(".arrow-right");
const textTitle = document.querySelector(".shop h1");
const textParagraph = document.querySelector(".shop p");

let i = 0;

const getClass = () => {
  switch (i) {
    case 0:
      textTitle.textContent = "Discover innovative ways to decorate";
      textParagraph.textContent = `We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing
      your vision to life. Create a room in your own style with our
      collection and make your property a reflection of you and what you
      love.`;
      return 'url("./images/desktop-image-hero-1.jpg")';
    case 1:
      textTitle.textContent = "We are available all across the globe";
      textParagraph.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`;
      return 'url("./images/desktop-image-hero-2.jpg")';
    case 2:
      textTitle.textContent = "Manufactured with the best materials";
      textParagraph.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`;
      return 'url("./images/desktop-image-hero-3.jpg")';
    default:
      textTitle.textContent = "Discover innovative ways to decorate";
      textParagraph.textContent = `We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing
      your vision to life. Create a room in your own style with our
      collection and make your property a reflection of you and what you
      love.`;
      return 'url("./images/desktop-image-hero-1.jpg")';
  }
};

sliderPrev.addEventListener("click", () => {
  if (i > 0) {
    i--;
  }
  slider.style.backgroundImage = `${getClass()}`;  
});

sliderNext.addEventListener("click", () => {
  if (i < 2) {
    i++;
  }
  slider.style.backgroundImage = `${getClass()}`;
});
