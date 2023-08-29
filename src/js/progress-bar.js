const elementsToExpand = document.querySelectorAll(".progress-bar");
let expansionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `progress 1.5s ease-in-out forwards`;} 
      else {
      entry.target.style.animation = "none";}
  });
});
elementsToExpand.forEach((element) => {
  expansionObserver.observe(element);
});