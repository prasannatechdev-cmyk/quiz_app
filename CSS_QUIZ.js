const questions = [
  {
    q: "What does CSS stand for?",
    options: [
      "CASCADING STYLE SHEET",
      "High Tech Modern Language CSS",
      "Hyper Transfer Machine Language CSS"
    ],
    answer: "CASCADING STYLE SHEET"
  },
  {
    q: "CSS is used for?",
    options: [
      "Structuring web pages",
      "Styling web pages",
      "Programming logic"
    ],
    answer: "Styling web pages"
  },
  {
    q: "Which CSS tag is used for styling?",
    options: ["<h1>", "<style>", "<div>"],
    answer: "<style>"
  }
];

let index = 0;
let selected = "";
let correct = 0;
let wrong = 0;

// START QUIZ
document.getElementById("startcss").addEventListener("click", startQuiz);

function startQuiz() {
  document.getElementById("quiz").style.display = "none";
  showQuestion();
}

// SHOW QUESTION
function showQuestion() {
  let q = questions[index];

  document.getElementById("questions").innerHTML = `
    <h2>${q.q}</h2>
    <div id="options"></div>
    <br>
    <button onclick="nextQuestion()">Next</button>
  `;

  let box = document.getElementById("options");

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      selected = opt;

      // reset all buttons
      document.querySelectorAll("#options button").forEach(b => {
        b.style.background = "";
      });

      // highlight selected
      btn.style.background = "lightgreen";
    };

    box.appendChild(btn);
  });
}

// NEXT QUESTION
function nextQuestion() {

  // prevent skipping
  if (selected === "") {
    alert("Please select an option");
    return;
  }

  // check answer
  if (selected === questions[index].answer) {
    correct++;
  } else {
    wrong++;
  }

  index++;
  selected = "";

  if (index < questions.length) {
    showQuestion();
  } else {
    document.getElementById("questions").innerHTML = `
      <h2>Quiz Finished 🎉</h2>
      <p>✅ Correct Answers: ${correct}</p>
      <p>❌ Wrong Answers: ${wrong}</p>
      <p>📊 Total Questions: ${questions.length}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
}

// RESTART QUIZ
function restartQuiz() {
  index = 0;
  correct = 0;
  wrong = 0;
  selected = "";

  document.getElementById("quiz").style.display = "block";
  document.getElementById("questions").innerHTML = "";
}
