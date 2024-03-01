
const btns = document.querySelectorAll(".roundBtns");
const submitBtn = document.querySelector(".submitBtn button");
let displayResult = document.querySelector(".displayResult p");
const thankyouPage = document.querySelectorAll(".thankyouState");
const ratingPage = document.querySelectorAll(".ratingState");

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
        displayResult.textContent = `You selected ${n} out of 5`;   
    });
});

submitBtn.addEventListener("click", () => {
    ratingPage.forEach(element => {
        element.style.display = "none";
    })
    thankyouPage.forEach(element => {
        element.style.display = "flex";
    });
})





