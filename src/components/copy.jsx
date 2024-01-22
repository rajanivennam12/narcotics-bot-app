import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
//import FileUpload from "./FileUpload";

function Content(props) {
  const [pic, setPic] = useState("");
  const [note, setNote] = useState({
    question: "",
    answer: ""
  });

  const [copied, setCopied] = useState(false); // State to track copied content

  function handleQuestionChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    setPic(file);
    console.log(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setNote({
      question: ""
    })

    try {
      const formData = new FormData();
      formData.append('prompt', note.question);

      const response = await fetch('http://127.0.0.1:8000/output/', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 200) {
        const data = await response.json();
        setNote((prevNote) => ({
          ...prevNote,
          answer: data,
        }));
        props.onAdd({ ...note, answer: data });
      } else {
        throw new Error('Non-OK response status');
      }
    } catch (error) {
      console.error('Error fetching answer:', error);
      setNote((prevNote) => ({
        ...prevNote,
        answer: 'Error fetching answer',
      }));
      props.onAdd({ ...note, answer: 'Error fetching answer' });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(note.answer);
    setCopied(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='questionBar'>
        <ImageUpload />
        <input
          className='inputBox'
          name="question"
          type="text"
          value={note.question}
          placeholder='Ask about NCB'
          onChange={handleQuestionChange}
        />
        <button className='submitBox' type="submit">
          <img className='arrowImg' src='./src/assets/new.png' alt="Submit" />
        </button>
        
        {/* Copy Button */}
        <button
          className='copyButton'
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </form>
  );
}

export default Content;
