import React, { useState, useEffect } from "react";
import "./popup.css";
import { getDiagnose, getQuestion, getTreatment } from "./getdata";

export default function Popup({ open, id, onClose }) {
  const [questiondisplay, setQuestiondiaplay] = useState({
    _id: "",
    diagnose: [],
    image: "",
  });
  useEffect(() => {
    getQuestion(id).then((res) => setQuestiondiaplay(res));
  }, [id]);

  const [hidediagnosebtn, setHidediagnosebtn] = useState(true);
  const [hidetreatmentbtn, setHidetreatmentbtn] = useState(true);
  const [diagnosedisplay, setDiagnosedisplay] = useState({});

  const handleDiagnose = (id) => {
    getDiagnose(id).then((res) => setDiagnosedisplay(res));
    setHidediagnosebtn(false);
  };
  const handleClose = () => {
    setQuestiondiaplay({});
    setDiagnosedisplay({});
    setHidediagnosebtn(true);
    onClose();
  };

  const handleTreatment = () => {};

  const reDo = () => {
    setDiagnosedisplay({});
    setHidediagnosebtn(true);
  };

  const redo = (
    <div className="error">
      <div>Lỗi</div> <button onClick={reDo}>Chọn lại</button>
    </div>
  );

  return open ? (
    <div key="OVERLAY" className="OVERLAY">
      <div key="POPUP" className="POPUP_STYLE">
        <button className="close-btn" onClick={handleClose}>
          CLOSE
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

          {/*display diagnose */}
          {JSON.stringify(diagnosedisplay) !== "{}" ? (
            <div className="QUESTION">
              <div className="HIGHLIGHT-CHOICED">
                Lựa chọn của bạn: <span>{diagnosedisplay.name}</span>
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
                onClick={() => handleTreatment(id)}
              >
                {id.name}
              </button>
            ) : null
          )}
        </>
      </div>
    </div>
  ) : null;
}
