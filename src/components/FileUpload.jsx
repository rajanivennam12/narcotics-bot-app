import React, { useRef } from 'react';

const FileUpload = () => {
  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const fileInput = event.target;
    const files = fileInput.files;

    if (files.length > 0) {
      const file = files[0];

      // Check if the file is an image
      if (file.type.startsWith('image/')) {
        // Handle the image upload here (e.g., display preview, send to server, etc.)
        console.log('Image selected:', file);
      } else {
        alert('Please select a valid image file.');
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Add styles to indicate drag-and-drop area
    document.getElementById('drop-area').classList.add('drag-over');
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Remove styles when leaving the drag-and-drop area
    document.getElementById('drop-area').classList.remove('drag-over');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // Remove styles when dropping the file
    document.getElementById('drop-area').classList.remove('drag-over');

    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];

      // Check if the dropped file is an image
      if (file.type.startsWith('image/')) {
        // Handle the image upload here (e.g., display preview, send to server, etc.)
        console.log('Image dropped:', file);
      } else {
        alert('Please drop a valid image file.');
      }
    }
  };

  return (
    <div>
      <button onClick={openFileInput}>Upload Image</button>
      <div
        id="drop-area"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Click or drag and drop an image here.</p>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default FileUpload;
