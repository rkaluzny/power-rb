const rightAnim = document.querySelectorAll(".right-anim");

// Create an IntersectionObserver instance
const observerRight = new IntersectionObserver((entries, observerRight) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // If the element is in the viewport
    if (entry.isIntersecting) {
      // Add the "in-view" class to the element
      entry.target.classList.add("right-anim-class");
    }
  });
});

// Observe each item in the container
rightAnim.forEach((rightAnim) => {
    observerRight.observe(rightAnim);
});




const leftAnim = document.querySelectorAll(".left-anim");

// Create an IntersectionObserver instance
const observerLeft = new IntersectionObserver((entries, observerLeft) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // If the element is in the viewport
    if (entry.isIntersecting) {
      // Add the "in-view" class to the element
      entry.target.classList.add("left-anim-class");
    }
  });
});

// Observe each item in the container
leftAnim.forEach((leftAnim) => {
    observerLeft.observe(leftAnim);
});



const topAnim = document.querySelectorAll(".top-anim");

// Create an IntersectionObserver instance
const observertop = new IntersectionObserver((entries, observertop) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // If the element is in the viewport
    if (entry.isIntersecting) {
      // Add the "in-view" class to the element
      entry.target.classList.add("top-anim-class");
    }
  });
});

// Observe each item in the container
topAnim.forEach((topAnim) => {
    observertop.observe(topAnim);
});



const bottomAnim = document.querySelectorAll(".bottom-anim");

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
  // Loop through the entries
  entries.forEach((entry) => {
    // If the element is in the viewport
    if (entry.isIntersecting) {
      // Add the "in-view" class to the element
      entry.target.classList.add("bottom-anim-class");
    }
  });
});

// Observe each item in the container
bottomAnim.forEach((bottomAnim) => {
  observer.observe(bottomAnim);
});
