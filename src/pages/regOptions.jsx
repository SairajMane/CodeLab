import React from 'react';
import '../css/regoptions.css';

const RegistrationPage = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card teacher-card">
          <div className="card-body">
            <h5 className="card-title">Register as a Teacher</h5>
            <form>
              {/* Add teacher registration form fields here */}
            </form>
            <button className="register-button">Register</button>
          </div>
        </div>
        <div className="card student-card">
          <div className="card-body">
            <h5 className="card-title">Register as a Student</h5>
            <form>
              {/* Add student registration form fields here */}
            </form>
            <button className="register-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
