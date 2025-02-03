const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  //
  let timer;
  let seconds=30;

  //
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const timerElement = document.getElementById('timer');

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
       resultElement.innerText = `${seconds}s`
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      console.log('hello')
      resultElement.innerHTML = "Correct!";
      score++;
    } else {
      resultElement.innerHTML = "Wrong!";
      console.log('hie')
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(()=>{
      resultElement.textContent = "";
    },1000)
    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }
    
    displayEmoji();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    setTimer();
    displayEmoji();
  });
  function setTimer(){
     timer = setInterval(()=>{
      seconds--;
      resultElement.innerText = `${seconds}s`
      if(seconds<=0){
        clearTimer();
      }
    },1000)
  }

  function clearTimer(){
      clearInterval(timer);
      guessInput.disabled= true;
  }