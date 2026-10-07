let currentQuestion = 0;
let selectedDifficulty = "";

function selectDifficulty(difficulty) {

    alert("JavaScript is Working!");

    selectedDifficulty = difficulty;

    const difficultyScreen =
        document.getElementById("difficultyScreen");

    const challengeScreen =
        document.getElementById("challengeScreen");

    const title =
        document.getElementById("challengeTitle");

    const question =
        document.getElementById("questionText");

    const questionIndex = questions.findIndex(
        q => q.difficulty === difficulty
    );

    if (questionIndex === -1) {
        alert("No question available.");
        return;
    }

    currentQuestion = questionIndex;

    title.textContent =
        difficulty + " Coding Challenge";

    question.textContent =
        questions[currentQuestion].description;

    difficultyScreen.style.display = "none";
    challengeScreen.style.display = "block";

    document.getElementById("output").textContent = "";
    document.getElementById("answer").value = "";
}

function submitCode() {

    let code = document.getElementById("codeInput").value;

    if (code.trim() === "") {
        document.getElementById("outputBox").innerText =
            "Please write your code first.";
        return;
    }

    document.getElementById("outputBox").innerText =
        "Code submitted successfully!\n\nYour code:\n" + code;
}

function clearCode() {

    document.getElementById("codeInput").value = "";

    document.getElementById("outputBox").innerText =
        "Output will appear here...";
}


function goHome() {

    document.getElementById("challengeScreen").style.display = "none";

    document.getElementById("difficultyScreen").style.display = "block";

    document.getElementById("answer").value = "";

    document.getElementById("output").innerText =
        "Your output will appear here.";
}



