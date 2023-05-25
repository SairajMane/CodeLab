import React, { useState } from 'react';
import '../css/createLab.css';


const CreateLab = () => {
  const [lname, setlName] = useState('');
  const [ldesc, setlDesc] = useState('');
  const [lclass, setlClass] = useState('');

  const handleNameChange = (e) => {
    setlName(e.target.value);
  };

  const handleDescrChange = (e) => {
    setlDesc(e.target.value);
  };

  const handleClassChange = (e) => {
    setlClass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(lname, ldesc,lclass);
    fetch("http://192.168.1.102:4000/api/v1/lab-creation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace with the actual token
      },
      body: JSON.stringify({
        lname,
        ldesc,
        lclass
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "Lab Created");
        if (data.status === "ok") {
          alert("Lab Created Successfully");
          window.location.href = "./Lab";
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };


  return (
    <div className="createlab-page">
      <div className="createlab-container">
        <h4 className="createlab-header">Create New Lab</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Lab Name"
            value={lname}
            onChange={handleNameChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Lab Description"
            value={ldesc}
            onChange={handleDescrChange}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter Class"
            value={lclass}
            onChange={handleClassChange}
            className="input-field"
            required
          />
          <button type="submit" className="createlab-button">Create Lab</button>
        </form>
      </div>
    </div>
  );
};

export default CreateLab;
