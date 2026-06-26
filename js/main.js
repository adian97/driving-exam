if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

function goExam() {

    sessionStorage.setItem(
        "mode",
        "exam"
    );

    window.location.href =
        "category.html";
}

function goPractice() {

    sessionStorage.setItem(
        "mode",
        "practice"
    );

    window.location.href =
        "exam.html";
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
