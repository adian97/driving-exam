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
    "correctBox"
).innerText = correct;

document.getElementById(
    "wrongBox"
).innerText = wrong;

document.getElementById(
    "accuracyBox"
).innerText = score + "%";

document.getElementById(
    "scoreText"
).innerText =
    score + "%";

if (correct >= 27) {

    document.getElementById(
        "resultStatus"
    ).innerText = "PASSED";

    document.getElementById(
        "resultStatus"
    ).style.color = "#17c653";

    document.getElementById(
        "resultMessage"
    ).innerText =
        "Congratulations! You have passed the exam.";
}
else {

    document.getElementById(
        "resultStatus"
    ).innerText = "FAILED";

    document.getElementById(
        "resultStatus"
    ).style.color = "#ff4d4f";

    document.getElementById(
        "resultMessage"
    ).innerText =
        "Keep practicing and try again.";
}
