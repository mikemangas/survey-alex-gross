export const surveyContent = {
  title: 'Welcome to our Survey',
  lorem:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  startSurvey: 'Start the survey',
  enterName: 'Please enter your name.',
  whoAreYou: 'Who are you?',
  surveyFor: 'Survey for',
  next: 'Next',
  back: 'Back',
  finish: 'Finish',
  yourScore: 'Your Score',
  result: 'Result',
  points: 'Points',
  question: 'Question',
  questionsAnswers: [
    {
      title: 'Who are you?',
      question: 'Please enter your name.',
      placeholder: 'John Doe',
      tag: 'input',
      type: 'text',
      // answers: [],
    },
    {
      question: 'How often do you visit this Website?',
      tag: 'input',
      type: 'radio',
      answers: [
        { answer: 'Often', score: 5 },
        { answer: 'Rarely', score: 3 },
        { answer: 'Never', score: 0 },
      ],
    },
    {
      question: 'Please select at least one option',
      tag: 'input',
      type: 'radio',
      answers: [
        { answer: 'Option 1', score: 2 },
        { answer: 'Option 2', score: 2 },
        { answer: 'Option 3', score: 2 },
      ],
    },
    {
      question: 'Where are you from?',
      tag: 'select',
      type: 'select',
      answers: [
        { answer: 'Germany', score: 3 },
        { answer: 'Sweden', score: 5 },
        { answer: 'Italy', score: 5 },
        { answer: 'Spain', score: 3 },
      ],
    },
  ],
};
