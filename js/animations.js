let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('lift-anim');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.3});

let elementsToObserve = document.querySelectorAll('.anim');

elementsToObserve.forEach(element => {
  observer.observe(element);
});