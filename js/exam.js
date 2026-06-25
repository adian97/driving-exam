for(let i=1;i<=30;i++){

    const div =
        document.createElement("div");

    div.className =
        "question-box-item";

    if(i===1)
        div.classList.add("active");

    div.innerText = i;

    document
        .getElementById("questionNumbers")
        .appendChild(div);
}
