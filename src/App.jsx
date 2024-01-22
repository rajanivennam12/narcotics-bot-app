import { useState, useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Display from './components/Display';
import zoomPlus from './components/assets/zoom_plus.jpg';
import zoomMinus from './components/assets/zoom_minus.jpg';
import lion from './components/assets/lion.png'
import middlelogo from './components/assets/middlelogo.png'
// import police from './components/assets/police.png'
// import 'bootstrap/dist/css/bootstrap.min.css'





function App() {
  // Load notes from local storage on component mount
  const [zoomInValue, setZoomInValue] = useState(15);
  const initialNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(initialNotes);
  const zoomInClick = () => {
    setZoomInValue(zoomInValue + 2);
  }

  const zoomOutClick = () => {
    setZoomInValue(zoomInValue - 2);
  }
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <div className='header'>
        
        <img className='lionIMG' src={lion} />
        <img className='ncbIMG' src={middlelogo} />
        <img className='policeIMG' src={police} />

      </div>
      <div style={{ width: "100%" }}>
        <div style={{ float: "right" }}>
          <button onClick={zoomInClick}>
            <img src={zoomPlus} alt="Button Image" style={{ width: "100%", height: "70%" }} />
          </button>
          <button onClick={zoomOutClick}>
            <img src={zoomMinus} alt="Button Image" style={{ width: "100%", height: "70%" }} />
          </button>
        </div>
      </div>

      <div style={{ float: "left", width: "100%" }} className='middleContent'>
        {notes.map((noteItem, index) => {
          return (
            <Display key={index} id={index} question={noteItem.question} answer={noteItem.answer} zoomInValue={zoomInValue} />
          );
        })}
      </div>
      <Content onAdd={addNote} />
    </div>
  );
}

export default App;//
