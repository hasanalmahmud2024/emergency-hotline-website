
// const copyButton = document.getElementById('copy-btn');

// copyButton.addEventListener('click', function () {
//     console.log('copy btn clicked');

//     const copyNumber = parseInt(document.getElementById("copy-number").innerText);
//     const newCopyNumber = copyNumber + 1;
//     console.log('copy count', newCopyNumber);

//     document.getElementById('copy-number').innerText = newCopyNumber;
// });

// const callButton = document.getElementById('call-button');

// callButton.addEventListener('click', function () {
//     const coins = parseInt(document.getElementById('coins').innerText);
//     console.log('call btn clicked');

//     if (coins) {
//         const updatedCoin = coins - 10;
//         document.getElementById("coins").innerText = updatedCoin;
//         console.log("updated coins", updatedCoin);
//     } else {
//         alert("You do not have enough coins to make a call.")
//     }
    

    
// })

// const heartIcon = document.getElementById("heart-icon");
// heartIcon.addEventListener('click', function () {
    
// })



// parent
document.body.addEventListener('click', function (event) {
    //  copy button
    if (event.target.classList.contains('copy-btn')) {
      console.log("copy btn clicked");
      const copyNumber = parseInt(
        document.getElementById("copy-number").innerText
      );
          const newCopyNumber = copyNumber + 1;
          console.log('copy count', newCopyNumber);

          document.getElementById('copy-number').innerText = newCopyNumber;
    };
    
        // love icon
        if (event.target.classList.contains("heart-icon")) {
            console.log("heart btn clicked");
            const heartCount = parseInt(document.getElementById("heart-count").innerText);
            const newHeartCount = heartCount + 1;
            document.getElementById('heart-count').innerText = newHeartCount;
            console.log("new heart count",newHeartCount);
            
    }
    
    // call button
    if (event.target.classList.contains('call-button') ) {
        console.log('call btn clicked');

        const parentContainer = event.target.parentElement.parentElement;
        console.log(parentContainer);

        const hotlineTitle = parentContainer.querySelector(".hotline-title").innerText;
        console.log(hotlineTitle);
        // history
        const historyCard = document.getElementById("history-card");

        
      const coins = parseInt(document.getElementById("coins").innerText);
        if (coins) {
              alert(`Call `)
              const updatedCoin = coins - 10;
              document.getElementById("coins").innerText = updatedCoin;
            console.log("updated coins", updatedCoin);

            

            
          } else {
              alert("You do not have enough coins to make a call.")
          }
    }

});
