import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import ProblemStatement from './components/ProblemStatement';
import Dropdown from './components/Dropdownmenu';
import LabCreate from './components/createLab';
import AssignmentCreate from './components/createAssignment';
import RegOptions from './pages/regOptions';
import GradingPage from './components/gradingPage'
import Compiler from './components/compiler';
import Editor from './components/codeEditor';
import Test from "./components/testing"
import UpdatedPS from './components/UpdatedData'
import UpdatedG from './components/UpdatedGrade'

function App() {

  const assignment = {
    no : 1,
    name : "CPP Assignment",
    problem_statement : "Add two nums",
    description : "write a c program to add two numbers",
    language : "cpp",
    input : "2 5",
    output : "7",
    marks: "10"
  }

  return (
    <div className="App">
      <Navbar />
      {/* <UpdatedG assignment={assignment} />  */}
      {/* <UpdatedPS assignment = {assignment}/> */}
      {/* <ProblemStatement assignment = {assignment}/> */}
      <GradingPage assignment={assignment}/>
      {/* <AssignmentCreate /> */}
      {/* <LabCreate /> */}
      {/* <AssignmentCreate /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;