import './ShowScore.css';
import Button from '../Button';
import { surveyContent } from '../../data/surveyContent';
import { calculateProgress } from '../../helpers/calculateProgress';
import Progress from '../Progress';
const { yourScore, result, points } = surveyContent;
const maxScore = 12;

export default function ShowScore({ name, score, onClick, buttonContent }) {
  return (
    <div className="Survey--wrapper ">
      <p className="Survey--result">{result}</p>
      <div className="ShowScore--result--wrapper">
        <h2 className="ShowScore--yourScore">{yourScore}</h2>
        <h4 className="ShowScore--yourName">{name}</h4>
      </div>
      <div className="ShowScore--score--wrapper">
        <h2 className="ShowScore--finalScore">{score}</h2>
        <p className="ShowScore--points">{points}</p>
      </div>
      <Progress
        borderRadius={1}
        height={53}
        className="ShowScore--progress-wrapper"
        progress={calculateProgress(maxScore, score)}
      />
      <Button content={buttonContent} onClick={onClick} />
    </div>
  );
}
