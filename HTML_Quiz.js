// document.getElementById("topics").addEventListener("click",display);
// function display(){
//    const box= document.getElementById("show");
//     // document.getElementById("show").style.width="100%";
//     // document.getElementById("show").style.animation="animate 2s linear";
//     // document.getElementById("show").innerHTML="<a href='signup.html'>JavaScript</a>";
//     box.style.width="50%";
//     box.style.animation="animate 5s infinite";
//     box.innerHTML=document.getElementById("list").innerHTML;
     


// }
// // display();


// document.getElementById('clck').addEventListener("click",show);
// function show(){
//     document.getElementById('questions').innerHTML= `
//     <div>
//                 <h3>What does HTML stand for?</h3>
//                 <label><input type="radio" name="q1"> Hyper Text Markup Language</label><br>
//                 <label><input type="radio" name="q1"> High Tech Modern Language</label><br>
//                 <label><input type="radio" name="q1"> Hyper Transfer Machine Language</label><br>
//                 <br>
//                 <button>NEXT</button>
//             </div>
//         `;

// document.getElementById('quiz').style.display="none";

// }






// ---------------------------------------------------------




// QUESTIONS DATABASE
// const questions = [
//   {
//     q: "What does HTML stand for?",
//     options: [
//       "Hyper Text Markup Language",
//       "High Tech Modern Language",
//       "Hyper Transfer Machine Language"
//     ],
//     answer: "Hyper Text Markup Language"
//   },
//   {
//     q: "HTML is used for?",
//     options: [
//       "Structuring web pages",
//       "Styling web pages",
//       "Programming logic"
//     ],
//     answer: "Structuring web pages"
//   },
//   {
//     q: "Which tag is used for heading?",
//     options: ["<h1>", "<p>", "<div>"],
//     answer: "<h1>"
//   }
// ];

// let index = 0;
// let selected = "";

// // START QUIZ
// document.getElementById("clck").addEventListener("click", startQuiz);

// function startQuiz() {
//   document.getElementById("quiz").style.display = "none";
//   showQuestion();
// }

// // SHOW QUESTION
// function showQuestion() {
//   let q = questions[index];

//   document.getElementById("questions").innerHTML = `
//     <h2>${q.q}</h2>
//     <div id="options"></div>
//     <br>
//     <button onclick="nextQuestion()">Next</button>
//   `;

//   let box = document.getElementById("options");

//   q.options.forEach(opt => {
//     let btn = document.createElement("button");
//     btn.innerText = opt;

//     btn.onclick = () => {
//       selected = opt;

//       // highlight selected
//       document.querySelectorAll("#options button").forEach(b => {
//         b.style.background = "";
//       });
//       btn.style.background = "lightgreen";
//     };

//     box.appendChild(btn);
//   });
// }

// // NEXT QUESTION
// function nextQuestion() {
//   index++;
//   selected = "";

//   if (index < questions.length) {
//     showQuestion();
//   } else {
//     document.getElementById("questions").innerHTML =
//       "<h2>Quiz Finished 🎉</h2>";
//   }
// }





// ------------- HTML QUIZ ----------------

// QUESTIONS DATABASE
const questions = [
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Machine Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    q: "HTML is used for?",
    options: [
      "Structuring web pages",
      "Styling web pages",
      "Programming logic"
    ],
    answer: "Structuring web pages"
  },
  {
    q: "Which tag is used for heading?",
    options: ["<h1>", "<p>", "<div>"],
    answer: "<h1>"
  }
];

let index = 0;
let selected = "";
let correct = 0;
let wrong = 0;

// START QUIZ
document.getElementById("starthtml").addEventListener("click", startQuiz);

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
