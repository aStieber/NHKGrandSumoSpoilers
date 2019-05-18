"use strict";

window.addEventListener('DOMContentLoaded', function (){
	var spoilerDiv = document.getElementById("p-tournament__vs");
	spoilerDiv.classList.add("spoilerBlur");

	spoilerDiv.onclick = function () {
		spoilerDiv.classList.toggle("spoilerBlur");
	};
}, false);