import React, { useState } from 'react';
import '../css/createAssignment.css';

const CreateLab = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [Statement, setStatement] = useState('');
  const [language, setLanguage] = useState('');
  const [input, setInput] = useState('');
  const[output, setOutput] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStatementChange = (e) => {
    setStatement(e.target.value);
  };

  const handleDescrChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleOutputChange = (e) => {
    setOutput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number,name,Statement,description,language,input,output);
      fetch("http://192.168.1.108:4000/api/v1/assignment-creation", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          number,
          name,
          Statement,
          description,
          language,
          input,
          output
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "AssignmentCreated");
          if (data.status == "ok") {
            alert("Assignment Created Successfully");
            
          } else {
            alert("Something went wrong");
          }
        });
  };


  return (
    <div className="assigncreate-page">
      <div className="assigncreate-container">
        <h4 className="assignheading">New Assignment</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Assignment Number"
            value={number}
            onChange={handleNumberChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Assignment Name"
            value={name}
            onChange={handleNameChange}
            className="input-field"
            required
          />
          <div className="form-group">
            <textarea
              value={Statement}
              onChange={handleStatementChange}
              className="form-control"
              placeholder="Enter Problem Statement"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <textarea
              value={description}
              onChange={handleDescrChange}
              className="form-control"
              placeholder="Enter Problem Description"
              required
            ></textarea>
          </div>
          <input
            type="text"
            placeholder="Language"
            value={language}
            onChange={handleLanguageChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Input Format"
            value={input}
            onChange={handleInputChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Output Format"
            value={output}
            onChange={handleOutputChange}
            className="input-field"
            required
          />
          <button type="submit" className="assigncreate-button">Create Assignment</button>
        </form>
      </div>
    </div>
  );
};

export default CreateLab;