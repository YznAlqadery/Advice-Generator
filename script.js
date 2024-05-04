const getAdviceBtn = document.querySelector(".get-advice");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");

// Fetch advice from the API
const getAdvice = async () => {
  try {
    adviceText.textContent = "Loading...";
    const advice = await fetch("https://api.adviceslip.com/advice");
    // Check if the response is ok
    if (!advice.ok) {
      throw new Error("Cannot fetch the data");
    }
    const adviceResponse = await advice.json();
    adviceText.textContent = `"${adviceResponse.slip.advice}"`;
    adviceNumber.textContent = `Advice #${adviceResponse.slip.id}`;
  } catch (error) {
    console.error(error);
    adviceText.textContent = "Oops! Something went wrong!";
    adviceNumber.textContent = "";
  }
};

const renderAdvice = () => {
  getAdvice();
};

// Event listener
getAdviceBtn.addEventListener("click", renderAdvice);
