import React, { useState } from 'react';
import axios from 'axios';

const Compiler = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous output and error
    setOutput('');
    setError(null);

    try {
      setIsLoading(true);

      // Make API call to the backend endpoint
      const response = await axios.post('http://localhost:3001/runcode', {
        code,
        language,
      });

      // Update the output state with the response data
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error executing code:', error);

      // Set the error state if there is an error
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Code:</label>
          <textarea value={code} onChange={(e) => setCode(e.target.value)}></textarea>
        </div>
        <div>
          <label>Language:</label>
          <input value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Running...' : 'Run Code'}
        </button>
      </form>
      {error && <p>{error}</p>}
      {output && <pre>{output}</pre>}
    </div>
  );
};

export default Compiler;
