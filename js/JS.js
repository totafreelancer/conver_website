  //================== Navbar current scroll ==================
function changeBackground() {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  var Header = document.querySelector("#header")
  var Headers = document.querySelector("#headers")
  
  if (scrollPos > 50) {
    Header.classList.add("Header-scrolled");
  } else {
    Header.classList.remove("Header-scrolled");
  }
  // current scroll button 
  var back_to_top = document.querySelector(".back-to-top")

  if (scrollPos > 500) {
    back_to_top.style.display = "inline";
  } else {
    back_to_top.style.display = "none";
  }
}
//================== Navbar current scroll End ==================



//================== registered ==================
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
//================== registered end ==================
//================== rightVideo ==================

var RVdoBtn = document.getElementById("RVdoBtn");
var Rimg = document.getElementById("Rimg");
var Iframe = document.getElementById("Iframe");
function rightVideo() {
  RVdoBtn.classList.add("remove");
  Rimg.classList.add("remove");
  Iframe.classList.remove("remove");
}
//================== rightVideo End ==================



//================== changeImage ==================
function changeImage(fileName) {
  let imgs = document.querySelector("#bannerImage");
  imgs.setAttribute("src", fileName);
}
var tBTNimg = document.querySelector("#tBTNimg")
var tBTNim2 = document.querySelector("#tBTNim2")
var tBTNim3 = document.querySelector("#tBTNim3")
var tBTNim4 = document.querySelector("#tBTNim4")
tBTNimg.addEventListener("click", function() {
  tBTNimg.classList.add("Actives");
  tBTNim2.classList.remove("Actives");
  tBTNim3.classList.remove("Actives");
  tBTNim4.classList.remove("Actives");
});
tBTNim2.addEventListener("click", function() {
  tBTNimg.classList.remove("Actives");
  tBTNim2.classList.add("Actives");
  tBTNim3.classList.remove("Actives");
  tBTNim4.classList.remove("Actives");
});
tBTNim3.addEventListener("click", function() {
  tBTNimg.classList.remove("Actives");
  tBTNim2.classList.remove("Actives");
  tBTNim3.classList.add("Actives");
  tBTNim4.classList.remove("Actives");
});
tBTNim4.addEventListener("click", function() {
  tBTNimg.classList.remove("Actives");
  tBTNim2.classList.remove("Actives");
  tBTNim3.classList.remove("Actives");
  tBTNim4.classList.add("Actives");
});
//================== changeImage End ==================
