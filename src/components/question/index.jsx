import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion} from '../../redux/apiRequest';


function Question() {

    const question = useSelector(state => state.question.questions?.allQuestion)
    // const questionbycate = useSelector(state => state.question.questions?.allQuestion)
    const dispatch = useDispatch()
      useEffect(() => {
        getAllQuestion(dispatch)
      },[dispatch])
      // console.log(question)

    return (
        <div className="question col-12">
            {question?.map(item => (
            <div className="situation col-6 col-md-4 col-lg-2" key={item._id}>
                <img src={item.image} />
                <p>Tình huống: {item.name}</p>
                <p>Mô tả: {item.description}</p>
                <p>Điểm TB: {item.averageMark}</p>
            </div>
            ))}
    </div>
    );
}
export default Question;