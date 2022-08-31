var elSiteForm = document.querySelector(".site-form");
var elSiteInput = document.querySelector("#current-money");
var elBtn = document.querySelector("#button-js");
var elSelect = document.querySelector("#currensy-select");
var elMessage = document.querySelector(".message");

elSiteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var inputValue = parseFloat(elSiteInput.value, 10);

    elMessage.textContent = inputValue * elSelect.value;
})