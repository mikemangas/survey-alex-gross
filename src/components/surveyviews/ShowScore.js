import './ShowScore.css';
import Button from '../Button';
import { surveyContent } from '../../data/surveyContent';
import { calculateProgress } from '../../helpers/calculateProgress';
import Progress from '../Progress';
const { yourScore, result, points } = surveyContent;
const maxScore = 12;

export default function ShowScore({ name, score, onClick, buttonContent }) {
  return (
    <div>
      <p>{result.toUpperCase()}</p>
      <div className="ShowScore--name">
        <h2 className="ShowScore--h2">{yourScore}</h2>
        <h4 className="ShowScore--h4">{name}</h4>
      </div>
      <div className="ShowScore--score">
        <h2 className="ShowScore--h2">{score}</h2>
        <p className="ShowScore--p">{points}</p>
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
