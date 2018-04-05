var button = document.querySelector(".hotel-search");
var modal = document.querySelector(".modal");

modal.classList.add("js-modal-close");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.toggle("js-modal-close");
	modal.classList.toggle("js-modal-open");
});