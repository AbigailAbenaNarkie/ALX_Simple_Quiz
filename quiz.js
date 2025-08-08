function checkAnswer() {
    // 1. Correct answer
    const correctAnswer = "4";

    // 2. Get user's selected answer
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedChoice ? selectedChoice.value : null;

    // 3. Get feedback element
    const feedback = document.getElementById("feedback");

    // 4. Compare answers and update feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 5. Event listener for submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

