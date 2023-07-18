const quiz = {
  questions: [
    {
      question: "What is the capital of India ?",
      correct: ["New Dellhi"],
      others: ["Mumbai", "Pune"],
    },
  ],
  currentQuestionIndex: 0,
  getNextQuestionIndex: () => {
    quiz.currentQuestionIndex++;
    return quiz.currentQuestionIndex;
  },
};

const displayCorrentAns = (event) => {
  event.target.style.color = "green";
};
const correctTheMistake = (event) => {
  event.target.style.color = "red";
  const rightAnswer = document.querySelector(".right-answer");
  rightAnswer.style.color = "green";
};

const setNextQuestion = () => {
  const question = document.querySelector(".question");
  const rightAnswer = document.querySelector(".right-answer");
  const wrongAnswer = document.querySelector(".wrong-answer");

  rightAnswer.style.color = "black";
  wrongAnswer.style.color = "black";

  question.innerText = "How many times India won world cup";
  rightAnswer.innerText = "2 times";
  wrongAnswer.innerText = "3 times";
};

const showNextQuestion = () => {
  console.log("next question comming");

  setTimeout(setNextQuestion, 2000);
};

const addListeners = () => {
  const rightAnswer = document.querySelector(".right-answer");
  const wrongAnswer = document.querySelector(".wrong-answer");
  const choices = document.querySelector(".choices");

  rightAnswer.addEventListener("click", displayCorrentAns);
  wrongAnswer.addEventListener("click", correctTheMistake);

  choices.addEventListener("click", showNextQuestion);
};

const startQuiz = () => {
  addListeners();
};

window.onload = startQuiz;
