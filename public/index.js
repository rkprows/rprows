var about = document.getElementById("about");
var show = document.getElementById("show");
var hide = document.getElementById("hide");
var intro = document.getElementById("summary");
var it = document.getElementById('intro-title');

show.onclick = function() {
  show.style.display = 'none';
  about.style.display = 'block';
  // about.style.transition = all 1s ease-out;
  hide.style.display = 'block';
  intro.style.display = 'none';
  it.style.display = 'none';
}

hide.onclick = function() {
  about.style.display = 'none';
  hide.style.display = 'none';
  // about.style.transition = all 1s ease-out;
  show.style.display = 'block';
  intro.style.display = 'block';
  it.style.display = 'block';

}

// const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//   console.log('Hello');
//   this.classList.toggle('open');
// }

// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//   }
// }

// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));