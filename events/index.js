const changeInnerText = (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);

  event.target.innerText = "Clicked Yes";
};

const handleEvents = () => {
  const box1 = document.querySelector("#box1");
  box1.onclick = changeInnerText;

  const box2 = document.querySelector("#box2");
};

window.onload = () => {
  console.log("hello");
  handleEvents();
};
