var button = document.querySelector(".hotel-search");
var modal = document.querySelector(".modal");
var form = modal.querySelector("form");

modal.classList.add("js-modal-none");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.toggle("js-modal-none");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		modal.classList.add("js-modal-none");
	};
});