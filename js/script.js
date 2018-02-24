var btn = document.querySelector(".btn-contacts");
var popup = document.querySelector(".form-write");
var close = document.querySelector(".btn-close");
btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("form-show");
  }
);

close.addEventListener("click", function() {
  popup.classList.remove("form-show"); 
});
