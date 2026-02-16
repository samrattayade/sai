const questions = [
  {
    q: "What does AI stand for?",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Internet", "Applied Info"],
    answer: 1
  },
  {
    q: "Which is an AI example?",
    options: ["Calculator", "Printer", "Voice Assistant", "Scanner"],
    answer: 2
  },
  {
    q: "Machine Learning is part of?",
    options: ["AI", "IoT", "Blockchain", "Cloud"],
    answer: 0
  },
  {
    q: "Which company created ChatGPT?",
    options: ["Google", "OpenAI", "Meta", "Amazon"],
    answer: 1
  },
  {
    q: "AI learns from?",
    options: ["Data", "Hardware", "Electricity", "Battery"],
    answer: 0
  },
  {
    q: "AI is used in?",
    options: ["Healthcare", "Education", "Finance", "All of these"],
    answer: 3
  },
  {
    q: "Which is NOT AI?",
    options: ["Self-driving car", "Chatbot", "Calculator", "Face recognition"],
    answer: 2
  },
  {
    q: "AI can replace humans completely?",
    options: ["Yes", "No"],
    answer: 1
  },
  {
    q: "AI works based on?",
    options: ["Rules & Data", "Luck", "Magic", "Guess"],
    answer: 0
  },
  {
    q: "Future of AI is?",
    options: ["Dangerous", "Useless", "Helpful", "Finished"],
    answer: 2
  }
];

const quizForm = document.getElementById("quizForm");

questions.forEach((item, index) => {
  let html = `<p>${index + 1}. ${item.q}</p>`;
  item.options.forEach((opt, i) => {
    html += `
      <input type="radio" name="q${index}" value="${i}">
      ${opt}<br>
    `;
  });
  quizForm.innerHTML += html + "<hr>";
});

function submitQuiz() {
  let score = 0;

  questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === item.answer) {
      score++;
    }
  });

  localStorage.setItem("score", score);

  if (score >= 6) {
    window.location.href = "certificate.html";
  } else {
    alert("You scored " + score + "/10. Minimum 6 required to pass.");
  }
}
