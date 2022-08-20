
const popUp = document.querySelector(".popUp");
const btn = document.querySelector("#btn-submit");
const span = document.querySelector(".close");
const correct = document.getElementsByClassName("correct-answer")[0];

span.addEventListener("click", () => {
    popUp.style.display = "none";
});
window.onclick = function (event) {
    if (event.target == popUp) {
        popUp.style.display = "none";
    }
};

const questions = ["q1", "q2", "q3", "q4", "q5"];
const answers = [2, 3, 1, 4, 4];
const form = document.getElementsByClassName("quiz")[0];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let total = 0;
    questions.forEach((question, index) => {
        if (form.elements[question].value == answers[index]) {
            total++;
        }
    });
    correct.innerText = `${total}`;
    console.log(correct.innerText);
    popUp.style.display = "block";

})
