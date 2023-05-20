import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import ProblemStatement from './components/ProblemStatement';
import Dropdown from './components/Dropdownmenu';
import LabCreate from './components/createLab';
import AssignmentCreate from './components/createAssignment';
import RegOptions from './pages/regOptions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AssignmentCreate />
    </div>
  );
}

export default App;