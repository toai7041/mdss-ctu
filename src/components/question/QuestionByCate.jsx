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
    //   console.log(questionByCate.id)
    //   console.log(question)

    return (
         <>
        <Nav />
        <div className="question col-12">
        {question?.map(item =>(
            item.categories === questionByCate.id?(
                <div className="situation col-6 col-md-4 col-lg-2" key={item._id} >
                <img src={item.image} />
                <p>Tình huống: {item.name}</p>
                <p>Mô tả: {item.description}</p>
                <p>Điểm TB: {item.averageMark}</p>
            </div>
            ):""
        ))}
        </div>
        </>
    );
}

export default QuestionByCate;