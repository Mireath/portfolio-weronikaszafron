let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      if (!entry.target.classList.contains('lift-anim')) {
        entry.target.classList.add('lift-anim');
      }
      
    }
  });
}, {threshold: 0});

let elementsToObserve = document.querySelectorAll('.anim');

elementsToObserve.forEach(element => {
  if(getComputedStyle(element).display  !== 'none') {
    observer.observe(element);
  }
});