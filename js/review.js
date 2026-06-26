let questions =
    JSON.parse(
        sessionStorage.getItem(
            "questions"
        )
    ) || [];

let userAnswers =
    JSON.parse(
        sessionStorage.getItem(
            "userAnswers"
        )
    ) || [];

let currentQuestion = 0;
function createReviewNumbers() {

    const container =
        document.getElementById(
            "reviewNumbers"
        );

    container.innerHTML = "";

    questions.forEach((question, index) => {

        const div =
            document.createElement("div");

        div.className =
            "review-number";

        div.innerText =
            index + 1;

        if (
            userAnswers[index] ===
            question.correctAnswer
        ) {
            div.classList.add(
                "correct"
            );
        }
        else if (userAnswers[index]) {
    div.classList.add(
        "wrong"
    );
}

        div.onclick = function () {
            showReviewQuestion(index);
        };

        container.appendChild(div);
    });
}
