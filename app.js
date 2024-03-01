
const btns = document.querySelectorAll(".roundBtns");
const submitBtn = document.querySelector(".submitBtn button");
let displayResult = document.querySelector(".displayResult p")

let submited = null;
let btnSelected = null;
btns.forEach(btn => {
    btn.addEventListener("click", function(e) {
        if (btnSelected) {
            btnSelected.style.backgroundColor = "";
        }

        e.target.style.backgroundColor = "lightgrey";
        btnSelected = e.target;
        let n = e.target.textContent;

        // need to add event listener of the summit btn
        displayResult.textContent = `You selected ${n} out of 5`;
       
    });
});





