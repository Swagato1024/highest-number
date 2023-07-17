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

  question.innerText = "this is new question";
  rightAnswer.innerText = "this is right";
  wrongAnswer.innerText = "this is wrong";
};

const delayNextQuestion = () => {
  console.log("next question comming");

  setTimeout(setNextQuestion, 2000);
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
