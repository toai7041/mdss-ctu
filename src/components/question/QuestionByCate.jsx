import { useParams } from "react-router-dom";
import Nav from "../../components/layout/Nav";
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion} from '../../redux/apiRequest';
import Question from "../../components/question";
import React, { useEffect } from 'react';

function QuestionByCate() {

    const questionByCate = useParams();
    const question = useSelector(state => state.question.questions?.allQuestion)
    const dispatch = useDispatch()
      useEffect(() => {
        getAllQuestion(dispatch)
      },[dispatch])

    return (
         <>
        <Nav />
        <div className="question col-12">
        {question?.map(item =>(item.categories === questionByCate.id?(
                <div className="situation col-6 col-md-4 col-lg-2" key={item._id} >
                <img src={item.image} />
                <p><b>Tình huống:</b> {item.name}</p>
                <p><b>Mô tả:</b> {item.description}</p>
                <p><b>Điểm TB:</b> {item.averageMark}</p>
            </div>
            ):"")
            )}
        </div>
        </>
    );
}

export default QuestionByCate;