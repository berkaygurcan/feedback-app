import { v4 as uuidv4 } from 'uuid'; //generate id paketi
import { createContext, useState } from 'react'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState( {
    item: {}, //ilk başta boş item seçilince id değeri gelicek
    edit: false //click edilince editlemeyi yapıcaz
  }
  );
 // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();//id verir
    console.log(newFeedback);
    // stateler ummutiable ondan direk ekleme silme değiştirme yapamıyoruz.Bu yüzden basitçe bir kopyalama işlemi yapmalıyız. '...' operatörü ile feedback arrayin hepsini [] array içine kopyaladık ve yeni array oluşmuş oldu.Önüne ise yeni objemizi yerleştirdik.
    setFeedback([newFeedback, ...feedback]);
};

  // Delete Feedback 
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
};
 //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })

  }

  //Update feedback item
  const updateFeedback  = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (
        item.id === id ? {...item, ...updItem} : item)
      )
    )
    
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit, //state değeri tutar
        deleteFeedback,
        addFeedback,
        editFeedback, //Func
        updateFeedback,

      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext