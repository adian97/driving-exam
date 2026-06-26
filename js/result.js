const correct =
    Number(
        sessionStorage.getItem(
            "correctAnswers"
        )
    );

const wrong =
    Number(
        sessionStorage.getItem(
            "wrongAnswers"
        )
    );

const total =
    correct + wrong;

const score =
    Math.round(
        (correct / total) * 100
    );

document.getElementById(
    "correctText"
).innerText = correct;

document.getElementById(
    "wrongText"
).innerText = wrong;

document.getElementById(
    "scoreText"
).innerText =
    score + "%";

if (score >= 74) {
    document.getElementById(
        "resultStatus"
    ).innerText = "PASSED";
}
else {
    document.getElementById(
        "resultStatus"
    ).innerText = "FAILED";
    document.getElementById(
        "resultStatus"
    ).style.color = "red";
}

function reviewAnswers() {
    window.location.href =
        "review.html";
}

function tryAgain() {
    window.location.href =
        "exam.html";
}

function goHome() {
    window.location.href =
        "main.html";
}
