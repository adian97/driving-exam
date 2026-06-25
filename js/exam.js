let currentQuestion = 0;
let totalQuestions = 30;

const questionNumbers =
    document.getElementById("questionNumbers");

// Create question number boxes
for (let i = 0; i < totalQuestions; i++) {

    const div = document.createElement("div");

    div.className = "question-box-item";
    div.innerText = i + 1;

    if (i === 0) {
        div.classList.add("active");
    }

    div.addEventListener("click", function () {
        showQuestion(i);
    });

    questionNumbers.appendChild(div);
}

// Show selected question
function showQuestion(index) {

    if (index < 0 || index >= totalQuestions) {
        return;
    }

    currentQuestion = index;

    const boxes =
        document.querySelectorAll(".question-box-item");

    boxes.forEach(box => {
        box.classList.remove("active");
    });

    boxes[index].classList.add("active");

    // Update question number on top
    document.getElementById("questionNo").innerText =
        index + 1;

    // Scroll active number into view
    boxes[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });
}

// Next button
function nextQuestion() {
    if (currentQuestion < totalQuestions - 1) {
        showQuestion(currentQuestion + 1);
    }
}

// Previous button
function previousQuestion() {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}

// Start with question 1
showQuestion(0);
