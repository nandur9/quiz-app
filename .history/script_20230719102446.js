const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },

    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Car Suv Sailboats",
      correct: "b"
    },

    {
      question: "What does HTML stand for?",
      a:"Hypertext Markup Language",
      b:"Helicopters Terminals Motorboats Lamborginis",
      c: "Hypertext Markup Language",
      d: "Hyperloop Machine Language",
      correct: "a"
    },

    {
      question: "What year was JavaScript launched?",
      a: "1995",
      b: "1996",
      c: "1997",
      d: "1998",
      correct: "a"
    },
  ];


  const quizEl = document.getElementById('container-1')

  const questionEl = document.querySelector('.question-1')

  const answerEls = document.querySelectorAll('.answer')

  const a_text = document.getElementById('a_text')

  const b_text = document.getElementById('b_text')

  const c_text = document.getElementById('c_text')

  const d_text = document.getElementById('d_text')

  const submitBtn = document.querySelector('.submit');




let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswer()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question 
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
  answerEls.forEach(answerEls => answerEls.checked = false)
};

function getSelected() {
  let answer;
  answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
  })
  return answer;
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if(answer){
    if(answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++;
    if(currentQuiz < quizData.length) {
      loadQuiz()
    }
    else{
      console.log(quizEl)
      quizEl.innerHTML = `<h2 class="question-1">You have answered ${score}/${quizData.length} question correctly.</h2>
      <button onclick = "history.go(0)" class="submit">Reload</button>`;
      console.log(quizEl.innerHTML)
      quizEl.innerHtml = score;
      console.log(quizEl)
    }
  }
});