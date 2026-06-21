const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("question");
const optionE1 = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreE1 = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionE1.innerText = q.question;
  optionE1.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = function() {
      checkAnswer(option);
    };

    optionE1.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if(selected === questions[currentQuestion].answer) {
    score++;
  }
}

nextBtn.addEventListener("click", function() {
  currentQuestion++;
if (currentQuestion < questions.length){
  loadQuestion();
}else {
  questionE1.innerText = "quiz Finished!";
  optionE1.innerHTML = "";
  scoreE1.innerText = `your score: ${score} /${questions.length}`;
  nextBtn.style.display = "none";
}
});

loadQuestion();

