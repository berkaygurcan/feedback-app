
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';



function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '') //1 decimal place haline getirir


  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviwes</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  ) 
}


export default FeedbackStats;