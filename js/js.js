var buttonSearch = document.querySelector(".hotel-search");
var modal = document.querySelector(".modal");
var form = modal.querySelector("form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adults-quantity]");
var children = form.querySelector("[name=children-quantity]");

modal.classList.add("js-modal-close");

buttonSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.toggle("js-modal-close");
	modal.classList.toggle("js-modal-open");
	modal.classList.remove("modal-error");
	arrival.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adults.value || adults.value<1) {
		evt.preventDefault();
		modal.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modal.classList.contains("js-modal-open")) {
			modal.classList.remove("js-modal-open");
			modal.classList.add("js-modal-close");
			modal.classList.remove("modal-error");
		}
	}
});