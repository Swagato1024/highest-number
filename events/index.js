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
    event.stopPropagation();
  };
  root.onclick = (event) => {
    console.log("from root");
  };
};

const handleMultipleLisiteners = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const parent = document.querySelector("#parent");
  const root = document.querySelector("#root");

  left.addEventListener("click", (e) =>
    console.log(`source: ${(e.target.innerText = "debu ")}`)
  );
  left.addEventListener("click", () => console.log("left"));
  left.addEventListener("click", (e) => {
    console.log("at left level");
    e.stopPropagation();
  });
  left.addEventListener("click", () => console.log("at left level again"));

  parent.addEventListener("click", () => console.log("at parent level"));
  root.addEventListener("click", () => console.log("at root level"));
};

window.onload = () => {
  console.log("hello");
  handleEvents();
  // handleEventPrpagation();
  handleMultipleLisiteners();
};
