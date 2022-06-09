import { useParams } from "react-router-dom";
import Nav from "../../components/layout/Nav";
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion} from '../../redux/apiRequest';
import Question from "../../components/question";
import React, { useEffect,useState } from 'react';
import Popup from './Popup';
import { getDiagnose, getQuestion, getSubDiagnose, getTreatment } from './getdata';

function QuestionByCate() {
  const [isOpen, setIsOpen] = useState(false)
  var name="";    
  const [questiondisplay, setQuestiondiaplay] = useState({
    "_id": "",
    "diagnose": [],
    "image": ""
  })
  const [hidediagnose, setHidediagnose] = useState(true)
  const [diagnosedisplay, setDiagnosedisplay] = useState({})
  const [anwserchoice, setAnwserchoice] =useState([])
  const [subdiagnose,setSubdiagnose] = useState({})
    const questionByCate = useParams();
    const question = useSelector(state => state.question.questions?.allQuestion)
    const dispatch = useDispatch()
      useEffect(() => {
        getAllQuestion(dispatch)
      },[dispatch])

      //
      const handleQuestion = (id) => {
        setIsOpen(true);
        getQuestion(id).then(res=> {
        setQuestiondiaplay(res)})
        setAnwserchoice([...anwserchoice, id]);
        
      }
      //
      
      const handleDiagnose = (id) => {
        getDiagnose(id).then(res => setDiagnosedisplay(res))
        setAnwserchoice([...anwserchoice, id]);
        setHidediagnose(false)
        
        
      }
      const close = () =>{
        setDiagnosedisplay({})
        setAnwserchoice([])
        setIsOpen(false)
        setQuestiondiaplay({
          "_id": "",
          "diagnose": [],
          "image": ""
        })
        setHidediagnose(true)
      }
      
      //
      const handleSubdiagnose = (id) => {
      getSubDiagnose(id).then(res=> setSubdiagnose(res))        
      setAnwserchoice([...anwserchoice, id]);
      }
      
      //redo choice
      const reDo= () =>{
      setAnwserchoice([])
      setDiagnosedisplay({})
      setSubdiagnose({})
      setHidediagnose(true)
      }
      
      const redo = <><div>Lỗi</div> <button onClick={reDo}>Chọn lại</button></>
    return (
         <>
        <Nav />
        <div className="question col-12">
        {question?.map(item =>(item.categories === questionByCate.id?(
                <div className="situation col-6 col-md-4 col-lg-2" value={item._id} key={item._id} onClick={()=>handleQuestion(item._id)}>
                <img src={item.image} />
                <p><b>Tình huống:</b> {item.name}</p>
                <p><b>Mô tả:</b> {item.description}</p>
                <p><b>Điểm TB:</b> {item.averageMark}</p>
            </div>
            ):"")
            )}

             {/* POPUP_QUESTION */}
            
             <Popup open={isOpen} onClose={close}> 
                <div key="POPUP">
                  {/*display question*/}
                  <div key="tinhuong" className='QUESTION'> 
                  <div className='HIGHLIGHT'>Tình huống</div> {questiondisplay?.description} <br></br><br></br>
                  <img src={questiondisplay?.image} className="center"/>                  
                  </div>
                  
                  {questiondisplay.diagnose?.map((id)=>(hidediagnose?                                                             
                  <button className="choice-btn" onClick={()=>handleDiagnose(id._id)}>{id.name}</button>:null))}                  
                  {!questiondisplay.diagnose.length?redo:null}            
                  
                  
                  {/*display diagnose */}
                  {JSON.stringify(diagnosedisplay)!="{}"?
                  <div className='QUESTION'>
                  <div className='HIGHLIGHT'>Chẩn Đoán sơ bộ </div>{diagnosedisplay.description}                  
                  </div>:null} 
                  {diagnosedisplay.subDiagnose?.map(subdiag=>
                  <button onClick={()=>handleSubdiagnose(subdiag)}>{subdiag}</button>)}
              

                  {/*display subdiag */}
                  {JSON.stringify(subdiagnose)!="{}"?
                  <>
                  <div>Chẩn Đoán sơ bộ</div>
                  <div>{subdiagnose.description}
                  <img/></div>                  
                  </>:null}
                  {subdiagnose?.treatment?.map(treat=><button onClick={()=>handleSubdiagnose(treat)}>{treat}</button>)}
                </div>
              </Popup>
        </div>
        </>
    );
}

export default QuestionByCate;