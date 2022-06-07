import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestion, getAnQuestion} from '../../redux/apiRequest';
import Popup from './Popup';
import { getDiagnose, getQuestion, getSubDiagnose, getTreatment } from './getdata';


function Question() {
    const [isOpen, setIsOpen] = useState(false)    
    const [questiondisplay, setQuestiondiaplay] = useState({
      "_id": "",
      "diagnose": [],
      "image": ""
    })
    const [diagnosedisplay, setDiagnosedisplay] = useState({})
    const question = useSelector(state => state.question.questions?.allQuestion)
    const [anwserchoice, setAnwserchoice] =useState([])
    const [subdiagnose,setSubdiagnose] = useState({})
    // const questionbycate = useSelector(state => state.question.questions?.allQuestion)
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
      }
      const close = () =>{
        setAnwserchoice([])
        setIsOpen(false)
        setQuestiondiaplay({
          "_id": "",
          "diagnose": [],
          "image": ""
        })

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
      }
      const redo = <><div>LOI</div> <button onClick={reDo}>Chon lai</button></>
      

    return (
        <div className="question col-12">
            {question?.map((item) => (            
              <><div className="situation col-6 col-md-4 col-lg-2" value={item._id} key={item._id} onClick={()=>handleQuestion(item._id)}>
                  <img src={item.image} />
                  <p>Tình huống: {item.name}</p>
                  <p>Mô tả: {item.description}</p>
                  <p>Điểm TB: {item.averageMark}</p>
              </div>
            </>            
            ))}
            {/* POPUP_QUESTION */}
            
            <Popup open={isOpen} onClose={close}> 
                <div key="POPUP">
                  {/*display question*/}
                  <div key="tinhuong" className='QUESTION'> <div className='HIGHLIGHT'>Tình huống</div> {questiondisplay?.description} <br></br><br></br>
                  <img src={questiondisplay?.image} className="center"/>                  
                  </div>
                  {/* phim ao test CSS */}
                  <><button className='choice-btn'>CHUAN DOAN</button><button className='choice-btn'>CHUAN DOAN</button></>
                  
                  {questiondisplay?.diagnose?.map(id=>
                  <button onclick={()=>handleDiagnose(id)}>{id}</button>)}                  
                  {!questiondisplay.diagnose.length?redo:null}            
                  
                  {/*test css chuan doan so bo 1*/}
                  <div className='QUESTION'>
                  <div className='HIGHLIGHT'>Chuẩn đoán sơ bộ 1</div>
                  <div>Nội dung chuẩn chuẩn đoán</div>
                  </div>
                  <div className='container-btn'><button className='choice-btn'>Chuẩn đoán 1</button><button className='choice-btn'>chuẩn đoán 2</button></div>
                  
                  {/*display diagnose */}
                  {!diagnosedisplay&&
                  (<div>
                  <div>Chuẩn đoán sơ bộ</div>
                  <div>{diagnosedisplay.description}</div>
                  {diagnosedisplay?.subdiagnose?.map(subdiag=><button onClick={()=>handleSubdiagnose(subdiag)}>{subdiag}</button>)}
                  </div>)}

                  {/*test css chuan doan so bo 2*/}
                  <div className='QUESTION'>
                  <div className='HIGHLIGHT'>Chuẩn đoán sơ bộ 2</div>
                  <div>Nội dung chuẩn chuẩn đoán</div>
                  </div>
                  <div><button className='choice-btn'>ĐIỀU TRỊ</button><button className='choice-btn'>Điều Trị 2</button></div>

                  {/*display subdiag */}
                  {!subdiagnose&&
                  (<>
                  <div>Chuẩn đoán sơ bộ</div>
                  <div>{subdiagnose.description}
                  <img/></div>
                  {subdiagnose?.treatment?.map(treat=><button onClick={()=>handleSubdiagnose(treat)}>{treat}</button>)}
                  </>)}
                </div>
              </Popup>
    </div>
    );
}
export default Question;