function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.children[0].classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

const targetImage1 = document.querySelector("#image-1");
const targetImage2 = document.querySelector("#image-2");
const targetImage3 = document.querySelector("#image-3");

observer.observe(targetImage1);
observer.observe(targetImage2);
observer.observe(targetImage3);
