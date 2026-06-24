if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

function goExam() {
    window.location.href = "category.html";
}

function goPractice() {
    window.location.href = "practice.html";
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
