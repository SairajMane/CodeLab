// import React, { useState, useEffect } from "react";
// import "../css/gradingPage.css";

// import axios from "axios";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";

// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-python";
// import "prismjs/components/prism-java";
// import "prismjs/components/prism-javascript";

// import "../css/prism.css";
// import "../css/codeEditor.css";

// function Grading(props) {
//   //from assignment object for problempage problemarea
//   const [statement, setStatement] = useState(
//     props.assignment.problem_statement
//   );
//   const [assID, setassID] = useState(props.assID);
//   const [description, setDescription] = useState(props.assignment.description);
//   const [name, setName] = useState(props.assignment.name);
//   const [lang, setLang] = useState(props.assignment.language);

//   //grading marks
//   const [grades, setgrades] = useState('');

//   //for editor section
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [ip, setIp] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   //fetch previous details
//   useEffect(() => {
//     fetchSubmissionDetails();
//   }, []);

//   const fetchSubmissionDetails = async () => {
//     try {
//       const response = await axios.post(
//         "http://192.168.1.102:4000/api/v1/sub-by-aid",
//         {
//           email: "s@gmail.com",
//           assignmentId: "646e865bbbd0a8540ae3854a",
//         }
//       );

//       const { code, input, output } = response.data;

//       setCode(response.data.submission.code);
//       setIp(response.data.submission.input);
//       setOutput(response.data.submission.output);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch submission details:", error);
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (event) => {
//     setIp(event.target.value);
//   };

//   const handleGradesChange = (event) => {
//     setgrades(event.target.value);
//   }

//   //Run code handle
//   const handleRunCode = () => 
//   {
//     if (!code.trim()) {
//       alert("Please type code first");
//       return;
//     }
//     const payload = {
//       script: code,
//       language: props.language,
//       versionIndex: 0,
//       inputs: ip,
//     };
//     axios.post("http://192.168.1.112:4000/api/v1/execute-code", payload)
//       .then((response) => {
//         setOutput(response.data.output);
//         alert("Ran Successfully!");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Something Went Wrong");
//       });
//   };


//   //submit marks
//   const handleSubmitMarks = () => {
//     const payload = {
//       studID: "646e8679bbd0a8540ae38550",
//       assID: "646e865bbbd0a8540ae3854a",
//       labID: "646e861dbbd0a8540ae38547",
//       marks: grades
//     };

//     axios
//       .post("http://192.168.1.112:4000/api/v1/grade", payload)
//       .then((response) => {
//         console.log(response.data.message);
//         alert("Graded SuccessFully!");
//       })
//       .catch((error) => {
//         alert("Something Went Wrong(GRADING)");
//         console.error(error.response.data);
//       });
//   };

//   return (
//     <div className="problempage">
//       <div className="problemArea">
//         <div className="crumb-1">
//           <p>
//             <span style={{ color: "gray" }}>Labs &#8250; PSDL &#8250;</span>{" "}
//             <span style={{ fontWeight: "bold" }}>Assignment 1</span>
//           </p>
//         </div>
//         <div className="heading">
//           <p onChange={(name) => setName(name)}> {name}</p>
//         </div>
//         <div className="prblmdef">
//           <p onChange={(statement) => setStatement(statement)}>{statement}</p>
//         </div>
//         <div className="descr">
//           <p> Description</p>
//         </div>
//         <div className="description">
//           <p onChange={(description) => setDescription(description)}>
//             {description}
//           </p>
//         </div>
//         <div className="descr">
//           <p> Language</p>
//         </div>
//         <div className="description">
//           <p
//             onChange={(lang) => {
//               setLang(lang);
//             }}
//           >
//             {lang}
//           </p>
//         </div>
//         <div className="input-with-button">
//           <input type="number" placeholder="Marks" className="field" onChange={handleGradesChange}></input>
//           <button className="button" onClick={handleSubmitMarks}>Grade</button>
//         </div>
//       </div>
//       <div className="editor-section">
//         <div className="editor">
//           <div className="window">
//             <div className="title-bar">
//               <div className="title-buttons">
//                 <div className="title-button"></div>
//                 <div className="title-button"></div>
//                 <div className="title-button"></div>
//               </div>
//             </div>
//             <div className="editor_wrap">
//               <Editor
//                 value={code}
//                 onValueChange={(code) => setCode(code)}
//                 highlight={(code) => highlight(code, languages.js)}
//                 padding={10}
//                 style={{
//                   fontFamily: '"Fira code", "Fira Mono", monospace',
//                   fontSize: 14,
//                 }}
//               />
//             </div>
//           </div>
//           <div className="button-container-1">
//             <p className="scrollip">Scroll Down to Enter the Input</p>
//             <button
//               className="buttons button-1"
//               onClick={() => {
//                 handleRunCode();
//                 document
//                   .getElementById("scrolldown")
//                   .scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               Run
//             </button>
//           </div>
//           <div className="iodiv" id="scrolldown">
//             <div className="input-output-container-1">
//               <div className="input-output-header-1">Input</div>
//               <textarea
//                 className="input-textarea-1"
//                 placeholder="Enter the Input"
//                 value={ip}
//                 onChange={handleInputChange}
//               ></textarea>
//               <div className="input-output-header-1">Output</div>
//               <textarea
//                 className="output-textarea-1"
//                 placeholder="Output"
//                 value={output}
//                 readOnly
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Grading;
