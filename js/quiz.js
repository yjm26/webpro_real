// Sample questions
const questions = [
    {
        id: 1,
        question_text: "What is the capital of France?",
        option_a: "London",
        option_b: "Berlin", 
        option_c: "Paris",
        option_d: "Rome",
        correct_option: "C"
    },
    {
        id: 2,
        question_text: "Which planet is known as the Red Planet?",
        option_a: "Venus",
        option_b: "Mars",
        option_c: "Jupiter",
        option_d: "Saturn",
        correct_option: "B"
    },
    {
        id: 3,
        question_text: "What is 7 x 8?",
        option_a: "54",
        option_b: "56",
        option_c: "62",
        option_d: "64",
        correct_option: "B"
    },
    {
        id: 4,
        question_text: "What is the largest mammal in the world?",
        option_a: "Elephant",
        option_b: "Giraffe",
        option_c: "Blue Whale",
        option_d: "Hippopotamus",
        correct_option: "C"
    },
    {
        id: 5,
        question_text: "Which country is home to the Taj Mahal?",
        option_a: "China",
        option_b: "India",
        option_c: "Egypt",
        option_d: "Pakistan",
        correct_option: "B"
    }
];

function renderQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text"><strong>${question.question_text}</strong></p>
            <div class="options">
                <label>
                    <input type="radio" name="answer_${question.id}" value="A" required>
                    <span>${question.option_a}</span>
                </label>
                <label>
                    <input type="radio" name="answer_${question.id}" value="B">
                    <span>${question.option_b}</span>
                </label>
                <label>
                    <input type="radio" name="answer_${question.id}" value="C">
                    <span>${question.option_c}</span>
                </label>
                <label>
                    <input type="radio" name="answer_${question.id}" value="D">
                    <span>${question.option_d}</span>
                </label>
            </div>
        `;
        questionContainer.appendChild(questionDiv);
    });
}

function submitTest() {
    let currentScore = 0;
    let allQuestionsAnswered = true;

    questions.forEach(question => {
        const selectedAnswer = document.querySelector(`input[name="answer_${question.id}"]:checked`);
        
        if (!selectedAnswer) {
            allQuestionsAnswered = false;
            return;
        }

        if (selectedAnswer.value === question.correct_option) {
            currentScore++;
        }
    });

    if (!allQuestionsAnswered) {
        alert('Please answer all questions before submitting');
        return;
    }

    const scorePercentage = Math.round((currentScore / questions.length) * 100);
    const scoreLevelDescription = getScoreLevelDescription(scorePercentage);

    document.getElementById('questions-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    
    document.getElementById('result-score').textContent = `${scorePercentage}%`;
    document.getElementById('score-level').textContent = scoreLevelDescription;
}

function getScoreLevelDescription(percentage) {
    if (percentage >= 80) return 'Advanced Level';
    if (percentage >= 60) return 'Intermediate Level';
    if (percentage >= 40) return 'Beginner Level';
    return 'Beginner Level';
}

// Render questions when page loads
window.onload = renderQuestions;