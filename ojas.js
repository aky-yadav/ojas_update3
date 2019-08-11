/*   range bar*/

var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
output.innerHTML = this.value;
}
slider.addEventListener("mouseover",function(){
var x=slider.value;
var color= 'linear-gradient(90deg,rgb(30,30,19)'+x+'%,rgb(94,94,94)'+x+"%)";
slider.style.background=color;
})



var fireslider = document.getElementById("FireRange");
var fireoutput = document.getElementById("value2");
fireoutput.innerHTML = fireslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
fireslider.oninput = function() {
fireoutput.innerHTML = this.value;
}
fireslider.addEventListener("mouseover",function(){
var x2=fireslider.value;
var color= 'linear-gradient(90deg,rgb(30,30,19)'+x2+'%,rgb(94,94,94)'+x2+"%)";
fireslider.style.background=color;
})

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 62,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
