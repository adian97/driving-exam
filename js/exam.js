let currentQuestion = 0;
let totalQuestions = 30;

const questionNumbers =
    document.getElementById("questionNumbers");

for(let i=0;i<totalQuestions;i++){

    const div =
        document.createElement("div");

    div.className =
        "question-box-item";

    if(i===0){
        div.classList.add("active");
    }

    div.innerText = i + 1;

    div.onclick = function(){
        showQuestion(i);
    };

    questionNumbers.appendChild(div);
}

function showQuestion(index){

    currentQuestion = index;

    document
        .querySelectorAll(".question-box-item")
        .forEach(box=>{
            box.classList.remove("active");
        });

    document
        .querySelectorAll(".question-box-item")
        [index]
        .classList
        .add("active");

    document
        .getElementById("questionNo")
        .innerText = index + 1;
}
