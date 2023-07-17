const changeInnerText = (event) => {
  console.log(event.type);
  console.log(event.target);

  event.secretKey = 100;
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

const handleEventPrpagation = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const parent = document.querySelector("#parent");
  const root = document.querySelector("#root");

  left.onclick = changeInnerText;
  right.onclick = changeInnerText;
  parent.onclick = (event) => {
    console.log(event.secretKey);
    console.log(event.target);
  };
};

window.onload = () => {
  console.log("hello");
  // handleEvents();
  handleEventPrpagation();
};
