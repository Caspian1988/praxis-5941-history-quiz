let questions = [];
let currentIndex = 0;
let score = 0;
let shuffleEnabled = false;
let domainStats = {};

function initQuiz() {
  document.getElementById('domain-filter').addEventListener('change', applyStudyControls);
  document.getElementById('shuffle-toggle').addEventListener('change', (event) => {
    shuffleEnabled = event.target.checked;
    applyStudyControls();
  });
  applyStudyControls();
}

function fisherYatesShuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function applyStudyControls() {
  const filter = document.getElementById('domain-filter').value;
  let filteredQuestions = [...QUESTIONS];

  if (filter === 'us-all') {
    filteredQuestions = filteredQuestions.filter(q => q.domain.startsWith('U.S. History'));
  } else if (filter === 'world-all') {
    filteredQuestions = filteredQuestions.filter(q => q.domain.startsWith('World History'));
  } else if (filter === 'US-to-1877') {
    filteredQuestions = filteredQuestions.filter(q => q.domain === 'U.S. History to 1877');
  } else if (filter === 'US-from-1877') {
    filteredQuestions = filteredQuestions.filter(q => q.domain === 'U.S. History 1877–Present');
  } else if (filter === 'world-to-1450') {
    filteredQuestions = filteredQuestions.filter(q => q.domain === 'World History to 1450');
  } else if (filter === 'world-from-1450') {
    filteredQuestions = filteredQuestions.filter(q => q.domain === 'World History 1450–Present');
  }

  questions = shuffleEnabled ? fisherYatesShuffle(filteredQuestions) : filteredQuestions;
  currentIndex = 0;
  score = 0;
  domainStats = {};
  questions.forEach(q => {
    if (!domainStats[q.domain]) {
      domainStats[q.domain] = { correct: 0, answered: 0 };
    }
  });
  restoreQuizCard();
  renderQuestion();
}

function restoreQuizCard() {
  const card = document.querySelector('.card');
  if (!card.querySelector('#question-text')) {
    card.innerHTML = `
      <span class="badge" id="progress">Loading...</span>
      <h2 id="question-text"></h2>
      <div id="options-container"></div>
      <div id="explanation"></div>
      <button id="next-btn">Next Question →</button>
    `;
    document.getElementById('next-btn').onclick = nextQuestion;
  }
}

function renderQuestion() {
  const q = questions[currentIndex];
  document.getElementById('progress').textContent = `Question ${currentIndex + 1} of ${questions.length} • ${q.domain}`;
  document.getElementById('question-text').textContent = q.question;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  const expBox = document.getElementById('explanation');
  expBox.style.display = 'none';
  expBox.textContent = '';

  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = 'none';
  nextBtn.textContent = currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question →';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(idx, btn);
    container.appendChild(btn);
  });
}

function checkAnswer(selectedIdx, clickedBtn) {
  const q = questions[currentIndex];
  const buttons = document.querySelectorAll('.option');
  buttons.forEach(b => (b.disabled = true));

  if (selectedIdx === q.answerIndex) {
    clickedBtn.classList.add('correct');
    score++;
    domainStats[q.domain].correct++;
  } else {
    clickedBtn.classList.add('wrong');
    buttons[q.answerIndex].classList.add('correct');
  }
  domainStats[q.domain].answered++;

  const expBox = document.getElementById('explanation');
  expBox.textContent = `Explanation: ${q.explanation}`;
  expBox.style.display = 'block';

  document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showFinalResults();
  }
}

function showFinalResults() {
  const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0;
  const card = document.querySelector('.card');

  const breakdownItems = Object.entries(domainStats).map(([domain, stats]) =>
    `<li><span class="domain-name">${domain}</span><span class="domain-score">${stats.correct} / ${stats.answered} correct</span></li>`
  ).join('');

  card.innerHTML = `
    <h2>Final Results</h2>
    <div class="results-summary">
      <p class="results-score">Overall: <strong>${score} / ${questions.length}</strong> (${percentage}% accuracy)</p>
      <h3>Domain Breakdown</h3>
      <ul class="domain-breakdown">${breakdownItems}</ul>
    </div>
    <button id="restart-btn" type="button">Restart Quiz</button>
  `;

  document.getElementById('restart-btn').onclick = applyStudyControls;
}

document.getElementById('next-btn').onclick = nextQuestion;

initQuiz();