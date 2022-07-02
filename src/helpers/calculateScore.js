import { surveyContent } from '../data/surveyContent';

export function calculateScore(result) {
  let score = 0;
  result.forEach((resultItem) => {
    surveyContent.questionsAnswers.forEach((questionAnswerItem) => {
      if (resultItem.question === questionAnswerItem.question) {
        questionAnswerItem.answers &&
          questionAnswerItem.answers.forEach((item) => {
            if (item.answer === resultItem.answer) {
              score += item.score;
            }
          });
      }
    });
  });
  return score;
}
