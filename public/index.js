var about = document.getElementById("about");
var show = document.getElementById("show");
var hide = document.getElementById("hide");

show.onclick = function() {
  show.style.display = 'none';
  about.style.display = 'block';
  about.style.transition = all 1s ease-out;
  hide.style.display = 'block';
}

hide.onclick = function() {
  about.style.display = 'none';
  hide.style.display = 'none';
  about.style.transition = all 1s ease-out;
  show.style.display = 'block';

}