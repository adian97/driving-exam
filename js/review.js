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
