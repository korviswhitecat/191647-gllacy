var link = document.querySelector(".contacts_button");
var popup = document.querySelector(".popup_feedback_form");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".feedback_button_close");


link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup_display");
	overlay.classList.add("overlay_display");
});


close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup_display");
	overlay.classList.remove("overlay_display");
});


window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (popup.classList.contains("popup_display")) {
	popup.classList.remove("popup_display");
	overlay.classList.remove("overlay_display");
	}
	}
});
