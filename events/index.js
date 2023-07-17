const changeInnerText = (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);

  event.target.innerText = event.type;
};

const changeInnerTextToBlue = (event) => {
  event.target.classList.add("highlight");
};

const handleEvents = () => {
  const box1 = document.querySelector("#box1");
  box1.onclick = changeInnerText;

  const box2 = document.querySelector("#box2");
  box2.onmouseenter = changeInnerText;

  const box3 = document.querySelector("#box3");
  box3.onmouseenter = changeInnerText;
  box3.onmouseleave = changeInnerTextToBlue;
};

window.onload = () => {
  console.log("hello");
  handleEvents();
};
