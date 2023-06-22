function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.addEventListener("scroll", function() {
  scrollFunction();
  onScroll();
});
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("button").classList.add('show');
  } else {
    document.querySelector("button").classList.remove('show');
  }
}


const content = "오늘 당신의 하루는 어땠나요?"
const text = document.querySelector(".text")
let index = 0;
 
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}
setInterval(typing, 500)



function fadeInTextOnScroll() {
  var text = document.getElementById("fade-in-text");
  var section = document.querySelector(".section-4");
  var sectionTop = section.getBoundingClientRect().top;

  var windowHeight = window.innerHeight;

  if (sectionTop < windowHeight) {
    text.style.opacity = "1";
  }
}

window.addEventListener("scroll", fadeInTextOnScroll);



