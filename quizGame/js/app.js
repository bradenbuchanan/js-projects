function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  function showQuestions(qustions, quizContainer){
    // Code will go here
  }
  function showResults(questions, quizContainer, resultsContainer){
    // Code will go here

  }
    // show questions
  showQuestions(questions, quizContainer);

  // When user clicks submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}

var myQuestions = [
  {
    question: "What is 10/2",
    answers: {
      a: '3',
      b: '5',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 30/3",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: '10'
  }
];

