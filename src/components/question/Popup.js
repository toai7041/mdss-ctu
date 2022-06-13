import React, { useState, useEffect } from "react";
import "./popup.css";
import { getDiagnose, getQuestion, getTreatment } from "./getdata";

export default function Popup({ open, id, onClose }) {
  const [questiondisplay, setQuestiondiaplay] = useState({
    _id: "",
    diagnose: [],
    image: "",
  });
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    getQuestion(id).then((res) => setQuestiondiaplay(res));
    setAnswer((answer) => [...answer, id]);
  }, [id]);
  const [diagnosedisplay, setDiagnosedisplay] = useState({});
  const [treatmentdisplay, setTreatmentdisplay] = useState({});
  const [hidediagnosebtn, setHidediagnosebtn] = useState(true);
  const [hidetreatmentbtn, setHidetreatmentbtn] = useState(true);

  const handleDiagnose = (id) => {
    setAnswer((answer) => [...answer, id]);
    getDiagnose(id).then((res) => setDiagnosedisplay(res));
    setHidediagnosebtn(false);
  };
  const handleClose = () => {
    setQuestiondiaplay({});
    setDiagnosedisplay({});
    setHidediagnosebtn(true);
    onClose();
    setHidetreatmentbtn(true);
    setAnswer([id]);
  };

  const handleTreatment = (id) => {
    setAnswer((answer) => [...answer, id]);
    setHidetreatmentbtn(false);
    getTreatment(id).then((res) => setTreatmentdisplay(res));
    console.log(answer);
  };

  const reDo = () => {
    setDiagnosedisplay({});
    setHidediagnosebtn(true);
    setTreatmentdisplay({});
    setHidetreatmentbtn(true);
    setAnswer();
    console.log(answer);
  };

  const redo = (
    <div className="error">
      <div>Không chính xác !!! </div>
      <button onClick={reDo}>Chọn lại</button>
    </div>
  );

  return open ? (
    <div key="OVERLAY" className="OVERLAY">
      <div key="POPUP" className="POPUP_STYLE">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        {/*display question*/}
        <>
          <div key="tinhuong" className="QUESTION">
            <div className="HIGHLIGHT">Tình huống</div>{" "}
            {questiondisplay?.description} <br></br>
            <br></br>
            <img src={questiondisplay?.image} className="center" />
          </div>
          {/** choice diagnose button */}
          <div className="choice-diagnose">
            {questiondisplay.diagnose?.map((id, index) =>
              hidediagnosebtn ? (
                <button
                  className="choice-btn"
                  key={index}
                  onClick={() => handleDiagnose(id._id)}
                >
                  {id.name}
                </button>
              ) : null
            )}
          </div>
          {/*display diagnose */}
          {JSON.stringify(diagnosedisplay) !== "{}" ? (
            <div className="QUESTION">
              <div className="HIGHLIGHT-CHOICED">

              <div>
                Lựa chọn của bạn: </div>
              <span className="namechoice">{diagnosedisplay.name}</span>
              </div>
              <div className="HIGHLIGHT">Chẩn Đoán sơ bộ </div>
              {diagnosedisplay.description}
              <img src={diagnosedisplay.image} />
              {diagnosedisplay.treatment.length > 0 ? null : redo}
            </div>
          ) : null}
          {/** choice treatment button */}
          {diagnosedisplay.treatment?.map((id, index) =>
            hidetreatmentbtn ? (
              <button
                className="choice-btn"
                key={index}
                onClick={() => handleTreatment(id._id)}
              >
                {id.name}
              </button>
            ) : null
          )}

          {/*display treatment */}
          {JSON.stringify(treatmentdisplay) !== "{}" ? (
            <div className="QUESTION">
              <div className="HIGHLIGHT-CHOICED">
                Lựa chọn của bạn: <span>{treatmentdisplay.name}</span>
              </div>
              <div className="HIGHLIGHT">Điều trị </div>
              {treatmentdisplay.desc}
              <img src={treatmentdisplay.image} />
              {/* {treatmentdisplay.result?.length > 0 ? null : redo} */}
              {redo}
            </div>
          ) : null}
        </>
      </div>
    </div>
  ) : null;
}
