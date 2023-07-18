const calculateTypingSpeed = (typedText, startTime, finishTime) => {
  console.log(typedText);
  console.log(">>>>", startTime);
  console.log(">>>>", finishTime);
};

const startRaceAndCalculateSpeed = () => {
  const typingBox = document.querySelector("#typing-box");
  const finishButton = document.querySelector("#finish-button");
  let startTime;

  typingBox.onclick = () => {
    startTime = new Date();
  };

  finishButton.onclick = () => {
    const typedText = typingBox.value;
    const finishTime = new Date();

    calculateTypingSpeed(typedText, startTime, finishTime);
  };
};

window.onload = startRaceAndCalculateSpeed;
