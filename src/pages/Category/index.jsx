import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import apiConfig from '../../api/apiConfig'
import { getAllCate } from '../../redux/apiRequest'
import Nav from "../../components/layout/Nav";
import { getAllQuestion } from '../../redux/apiRequest';



function Question() {
    const question = useSelector(state => state.allQuestion?.questions)
    const dispatch = useDispatch()
    useEffect(() => {
        getAllQuestion(dispatch)
    },[])
    console.log(question)
    return (
        <>
        <Nav/>
        <div className="question">
            <div className="question-container">
                
                
                    {question?.map(item => (
                        <>
                       <p>{item.name}</p> 
                       <p>{item.description}</p> 
                        </>
                        
                    ))}
                
            </div>
        </div>
        </>
    )
}

export default Question