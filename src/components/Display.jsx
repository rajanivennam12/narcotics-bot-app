import React from "react";
import './styles/Display.css'
import Button from "./Button";
import answerlogo from './assets/answerlogo.png'
import questionlogo from './assets/questionlogo.jpg'

function Display(props) {

  //const [actualZoomIn, setActualZoomIn] = [zoomInFun, props.zoomInFun];
  //const [zoomInValue,setZoomInValue] = useState(7);
  const zoomIn = () => {

    //setZoomInValue(zoomInValue+1);
    props.zoomInFun(zoomInValue + 1)
  }
  const zoomOut = () => {

    setZoomInValue(zoomInValue - 1);
  }

  return (
    <div className='totalContent'>

      <div className='displayQuestion'>
        <div className='blackgpt'>
          <img className='blackgptImg' src={questionlogo} />
        </div>


        <div className="question">
          <p style={{ color: "black", fontSize: props.zoomInValue + "px" }}>{props.question}</p>
        </div>
      </div>


      <div className='displayAnswer'>
        <div className='greengpt'>
          <img className='grenngptImg' src={answerlogo} />
        </div>
        <h2></h2>
        <div className='responseAnswer'>

          {props.answer &&
            <div>
              <pre style={{ 'text-wrap': 'balance', overflowWrap: 'break-word', fontSize: props.zoomInValue + "px" }}>{props.answer}</pre>


            </div>}

        </div>
        <div>
          <Button
            answer={props.answer}
          />
        </div>
        {/* <textarea
          value={answer}
          readOnly
          style={{ width: '300px', height: '280px', whiteSpace: 'pre-line' }}
          wrap="soft"
        />    */}
      </div>
    </div>

  )
}
export default Display;