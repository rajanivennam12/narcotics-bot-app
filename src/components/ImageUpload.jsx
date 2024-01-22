import React, { useState, useRef } from 'react';
import upload_button from './assets/upload_button.png'
function ImageUpload() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setIsButtonClicked(false);
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    // Focus the file input when the button is clicked
    inputRef.current.click();
  };

  const handleOverlayClick = () => {
    setIsButtonClicked(false);
  };

  return (
    <div>
      {!isButtonClicked && !uploadedImage && (
        <button  style={{ color: "black" ,marginRight:'10px'}} onClick={handleButtonClick}>
          <img  src={upload_button} height={"40px"}/>
        </button>
      )}

      {isButtonClicked && (
        <div className="overlay" onClick={handleOverlayClick}>
          <label htmlFor="images" className="drop-container" id="dropcontainer">
            <span className="drop-title">Drop files here</span> or
            <input
              type="file"
              id="images"
              accept="image/*"
              required
              onChange={handleFileChange}
              ref={inputRef}
            />
          </label>
        </div>
      )}

      {uploadedImage && (
        <div>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
