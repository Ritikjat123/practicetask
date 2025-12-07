let slides = document.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  changeSlide(index + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  changeSlide(index - 1);
});

function changeSlide(newIndex) {
  slides[index].classList.remove("active");

  index = (newIndex + slides.length) % slides.length;

  slides[index].classList.add("active");
}

// Auto slide every 3 seconds
setInterval(() => {
  changeSlide(index + 1);
}, 3000);
