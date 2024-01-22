import React, { useState } from "react";
//import ImageUpload from "./ImageUpload";
import LoadingOverlay from "./LoadingOverlay"; // Import the loading overlay component
import submit from './assets/new.png'
import './styles/Content.css'

function Content(props) {
  const [pic, setPic] = useState("");
  const [note, setNote] = useState({
    question: "",
    answer: "",
  });
  const [loading, setLoading] = useState(false);

  function handleQuestionChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
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
      question: "",
    });

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("prompt", note.question);

      const response = await fetch("http://127.0.0.1:8000/output/", {
        method: "POST",
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
        throw new Error("Non-OK response status");
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      setNote((prevNote) => ({
        ...prevNote,
        answer: "Error fetching answer",
      }));
      props.onAdd({ ...note, answer: "Error fetching answer" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <LoadingOverlay />} {/* Conditionally render the loading overlay */}
      <div className="questionBar">
        <div className="inputContainer">
          <input
            className="inputBox"
            name="question"
            type="text"
            value={note.question}
            placeholder="Ask about NCB"
            onChange={handleQuestionChange}
          />
          <button className="submitBox" type="submit">
            <img className="arrowImg" src={submit} alt="submit" />
          </button>
        </div>
        <div >
          <p className="Disclaimer">Disclaimer:This Bot only operates based on the provided Documents</p>
        </div>

      </div>
    </form>
  );
}

export default Content;