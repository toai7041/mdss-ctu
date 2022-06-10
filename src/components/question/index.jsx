import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion, getAnQuestion} from '../../redux/apiRequest';
import Popup from './Popup';

function Question() {
    const [isOpen, setIsOpen] = useState(false)
    const [questionId, setQuestionId] = useState("")
    const question = useSelector(state => state.question.questions?.allQuestion)
    const handleClick= (id) =>{
      setIsOpen(true)
      setQuestionId(id)
    }
    
    // const questionbycate = useSelector(state => state.question.questions?.allQuestion)
    const dispatch = useDispatch()
      useEffect(() => {
        getAllQuestion(dispatch)
      },[dispatch])


      const close = () =>{
        setIsOpen(false);
        setQuestionId("");
        
      }
    return (
        <div className="question col-12">
            {question?.map((item) => (            
              <><div className="situation col-6 col-md-4 col-lg-2" value={item._id} key={item._id} onClick={()=>handleClick(item._id)}>
                  <img src={item.image} />
                  <p>Tình huống: {item.name}</p>
                  <p>Mô tả: {item.description}</p>
                  <p>Điểm TB: {item.averageMark}</p>
              </div>
            </>            
            ))}
            {console.log(isOpen)}
            {/* POPUP_QUESTION */}
            <Popup open={isOpen} id={questionId} onClose={close}></Popup>
    </div>
    
    );
}
export default Question;