let progress = 0;
let step = 0;

// Array to store the different story parts and outcomes
const story = [
  {
    question: "It's an holiday, and you're feeling excited! What do you do first?",
    options: [
      { choice: "Eat breakfast.", outcome: "You eat breakfast, and it's DELICIOUS! But u didn't remember Soleman so your day started horribly!" },
      { choice: "Check your phone for messages.", outcome: "You receive tons of messages from friends and family. But you didn't text Soleman!"},
      { choice: "Think about Soleman.", outcome: "I don't think you'll ever pick this, so IDK." }
    ]
  },
  {
    question: "Now that you've started your day, what will you do next?",
    options: [
      { choice: "Go for a walk in the park.", outcome: "You take a peaceful walk, enjoying the beautiful weather." },
      { choice: "Call your best friend.", outcome: "You call your best friend, and then you yap!" },
      { choice: "Study.", outcome: "You start preparing for the exams. It's going to be epic!" }
    ]
  },
  {
    question: "Now that you've recieved a text from Soleman, what will you do next?",
    options: [
      { choice: "Ignore it.", outcome: "You ignore the message, enjoying life." },
      { choice: "Turn off the notifs.", outcome: "You turn off the notifs and forget about it!" },
      { choice: "Call 1098.", outcome: "Called 1098, Life is gonna be great from now." }
    ]
  },
  {
  question: "Now that you are bored, what will you do next?",
    options: [
      { choice: "Read manhwa.", outcome: "You read that book instead of reading manhwa" },
      { choice: "Watch Sitcom.", outcome: "You fell asleep while watching sitcom." },
      { choice: "Think about Soleman suffering in jail.", outcome: "Felt very happy that no one's annoying today!" }
    ]
  },
  // More steps can be added here with similar structure
];

function makeChoice(choice) {
  const currentStep = story[step];

  // Display the outcome of the choice
  const choiceIndex = choice === 'A' ? 0 : choice === 'B' ? 1 : 2;
  document.querySelector('.story').innerHTML = `
    <h2>${currentStep.options[choiceIndex].outcome}</h2>
  `;

  // Update progress bar
  progress += 25;
  document.getElementById('progress').innerText = `${progress}%`;
  // Disable buttons to prevent making multiple choices at once
  const buttons = document.querySelectorAll('.choices button');
  buttons.forEach(button => button.disabled = true);

  // Enable next button to move to the next step
  document.querySelector('.next-button button').disabled = false;
}

function nextStep() {
  step++;

  // Check if we have reached the last step
  if (step >= story.length) {
    document.querySelector('.story').innerHTML = `<h2>🎉 Congratulations! You succesfully completed your day!</h2>`;
    document.getElementById('outcome').innerText = `RIP Soleman`;
    document.querySelector('.next-button button').disabled = true;
    document.querySelector('.next-button button').style.visibility = 'hidden';
  } else {
    // Load the next step
    loadStep();
  }
}

function loadStep() {
  const currentStep = story[step];
  document.querySelector('.story').innerHTML = `
    <h2>${currentStep.question}</h2>
    <div class="choices">
      <button onclick="makeChoice('A')">${currentStep.options[0].choice}</button>
      <button onclick="makeChoice('B')">${currentStep.options[1].choice}</button>
      <button onclick="makeChoice('C')">${currentStep.options[2].choice}</button>
    </div>
  `;

  // Disable the next button until a choice is made
  document.querySelector('.next-button button').disabled = true;
}

// Initialize the first step
loadStep();
