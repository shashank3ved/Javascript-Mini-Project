const questions = [
  {
    question:"Which is largest animal in the world ?",
    answers:[
      { text:"Shark" , correct:false},
      { text:"Blue Whale" , correct:true},
      { text:"Elephant" , correct:false},
      { text:"Giraffe" , correct:false}
    ]
  },
  {
    question:"Which is fastest animal in the world ?",
    answers:[
      { text:"Shark" , correct:false},
      { text:"Blue Whale" , correct:false},
      { text:"cheetah" , correct:true},
      { text:"Giraffe" , correct:false}
    ]
  },
  {
    question:"Which is tallest building ?",
    answers:[
      { text:"Taj mahal" , correct:false},
      { text:"Burj khalifa" , correct:true},
      { text:"tower of hanoi" , correct:false},
      { text:"minar" , correct:false}
    ]
  },
  {
    question:"Which is smallest continent in the world ?",
    answers:[
      { text:"Australia" , correct:true},
      { text:"Europe" , correct:false},
      { text:"Asia" , correct:false},
      { text:"Africa" , correct:false}
    ]
  }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextbutton.innerHTML = "Next";
  showQuestions();
}

function showQuestions(){
  resetState();

  let currentQues =  questions[currentQuestionIndex] ;
  questionElement.innerHTML= `${currentQuestionIndex + 1}. ${currentQues.question}` ;

  currentQues.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct ;
    }
    button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
  nextbutton.style.display="none" ;
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target ;
  const isCorrect = selectedBtn.dataset.correct==="true" ;
  if(isCorrect){
    selectedBtn.classList.add("correct"); 
    score++;  
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled = true ;
  });
nextbutton.style.display ="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`
  nextbutton.innerHTML = "Play again" ;
  nextbutton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestions();
  }
  else{
    showScore();
  }
}

nextbutton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
      handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();