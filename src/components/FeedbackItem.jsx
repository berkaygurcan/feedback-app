import { FaTimes, FaEdit } from 'react-icons/fa'; //fa içinden kullanacağımız iconu aldık
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  
  return (
    <Card > 
        {/* <Card> içine gönderilen divler aslında onun childrenları oluyor ona card componentinden ulaşabiliriz. */}
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color = 'purple'/>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit  color='purple'/>
      </button>
      
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}


export default FeedbackItem