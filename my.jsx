import React, { useState } from 'react';
import './App.css'; // Make sure to style your components similarly to the image provided

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    // Implement your logic to get the response based on the query
    // For example, setResponse('Your response goes here');
  };

  const handleReview = (reviewType) => {
    // Implement your logic for handling reviews
    console.log(`User clicked ${reviewType}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* You should place your logos here */}
      </header>
      <main>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Ask about NCB"
        />
        <button onClick={handleSubmit}>Submit</button>
        <div className="response">{response}</div>
        {/* Add review buttons */}
        <button onClick={() => handleReview('positive')}>👍</button>
        <button onClick={() => handleReview('negative')}>👎</button>
      </main>
      <footer>
        {/* Disclaimer should go here */}
        <p>Disclaimer: The information provided...</p>
      </footer>
    </div>
  );
}

export default App;