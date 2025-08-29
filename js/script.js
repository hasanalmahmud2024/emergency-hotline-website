// parent
document.body.addEventListener("click", function (event) {
  //  copy button
  if (event.target.classList.contains("copy-btn")) {
    const copyNumber = parseInt(
      document.getElementById("copy-number").innerText
    );
    const newCopyNumber = copyNumber + 1;

    document.getElementById("copy-number").innerText = newCopyNumber;
  }

  // love icon
  if (event.target.classList.contains("heart-icon")) {
    const heartCount = parseInt(
      document.getElementById("heart-count").innerText
    );
    const newHeartCount = heartCount + 1;
    document.getElementById("heart-count").innerText = newHeartCount;
  }

  // history
  const historyCard = document.getElementById("history-card");
  const callHistory = document.createElement("div");
  callHistory.classList.add("bg-gray-200");
  callHistory.classList.add("rounded-xl");
  callHistory.classList.add("p-3");
  callHistory.classList.add("mb-3");
  const headline = document.createElement("p");

  // call button
  if (event.target.classList.contains("call-button")) {
    const parentContainer = event.target.parentElement.parentElement;

    const hotlineTitle =
      parentContainer.querySelector(".hotline-title").innerText;
    const callNumber = parentContainer.querySelector("h1").innerText;

    const coins = parseInt(document.getElementById("coins").innerText);
    if (coins) {
      alert(`Call ${hotlineTitle} \n ${callNumber} `);
      const updatedCoin = coins - 20;
      document.getElementById("coins").innerText = updatedCoin;

      const now = new Date();
      const hours = now.getHours(); // 0-23
      const minutes = now.getMinutes(); // 0-59
      const seconds = now.getSeconds(); // 0-59

      headline.innerText = `${hotlineTitle} \n ${callNumber} \n ${hours}:${minutes}:${seconds}`;
      callHistory.appendChild(headline);

      historyCard.appendChild(callHistory);
    } else if (coins < 20) {
      alert("You do not have enough coins to make a call.");
    }
    // clear
  }
//   if (event.target.classList.contains("clear-button")) {
//     console.log("cl");

//       callHistory.style.display = 'none';
    
//   }
});

document.getElementById('clear-button').addEventListener('click', function (event) {
    const sibling = event.target.parentElement.nextElementSibling;
    if (sibling) {
      sibling.remove();
    }
})
