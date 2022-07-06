const passInput = document.querySelector(".input-group  input");
const toggleIcon = document.querySelector(".input-group  .toggle");
const ripple = document.querySelector(".input-group  .ripple");
const percentBar = document.querySelector(".input-group .percent");
const passLabel = document.querySelector(".input-group  .passLabel");


passInput.addEventListener("input", handlePassInput);
toggleIcon.addEventListener("click", togglePassInput);

function handlePassInput(e) {
    if(passInput.value.length === 0) {
        passLabel.innerHTML = "Strength";
        addClass();
    } else if(passInput.value.length <= 4) {
        passLabel.innerHTML = "weak";
        addClass();
    }else if(passInput.value.length <= 7) {
        passLabel.innerHTML = "Not Bad";
        addClass();
    }else {
        
    }
}