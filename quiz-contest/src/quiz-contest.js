const displayCorrentAns = () => {};
const correctTheMistake = () => {};

const setNextQuestion = () => {
  const question = document.querySelector(".question");
  const rightAnswer = document.querySelector(".right-answer");
  const wrongAnswer = document.querySelector(".wrong-answer");

  question.innerText = "this is new question";
  rightAnswer.innerText = "this is right";
  wrongAnswer.innerText = "this is wrong";
};

const displayNextQuestion = () => {
  console.log("next question comming");

  setTimeout(setNextQuestion, 2000);
};

const delayNextQuestion = () => {
  displayNextQuestion();
};

const addListeners = () => {
  const rightAnswer = document.querySelector(".right-answer");
  const wrongAnswer = document.querySelector(".wrong-answer");
  const choices = document.querySelector(".choices");

  rightAnswer.addEventListener("click", displayCorrentAns);
  wrongAnswer.addEventListener("click", correctTheMistake);

  choices.addEventListener("click", delayNextQuestion);
};

const startQuiz = () => {
  addListeners();
};

window.onload = startQuiz;
