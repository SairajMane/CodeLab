// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";

// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-python";
// import "prismjs/components/prism-java";
// import "prismjs/components/prism-javascript";

// import "../css/prism.css";
// import "../css/codeEditor.css";
// import "../css/prblmstmt.css";

// function Prblmstmt(props) {
//   //from assignment object for problempage problemarea
//   const [statement, setStatement] = useState(
//     props.assignment.problem_statement
//   );
//   const [assID, setassID] = useState(props.assID);
//   const [description, setDescription] = useState(props.assignment.description);
//   const [name, setName] = useState(props.assignment.name);
//   const [inputtext, setInputText] = useState(props.assignment.input);
//   const [outputtext, setOutputText] = useState(props.assignment.output);
//   const [lang, setLang] = useState(props.assignment.language);

//   //for fetching data

//   //for editor section
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [ip, setIp] = useState("");

//   const handleInputChange = (event) => {
//     setIp(event.target.value);
//   };

//   //Run code handle
//   const handleRunCode = () => {
//     if (!code.trim()) {
//       alert("Please type code first");
//       return;
//     }
//     const payload = {
//       script: code,
//       language: "cpp",
//       versionIndex: 0,
//       inputs: ip,
//     };
//     axios
//       .post("http://192.168.1.102:4000/api/v1/execute-code", payload)
//       .then((response) => {
//         setOutput(response.data.output);
//         alert("Ran Successfully!");
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Something Went Wrong");
//       });
//   };

//   //Handle Submit Code
//   const handleSubmitCode = () => {
//     const payload = {
//       code: code,
//       input: ip,
//       language: props.language,
//       // Fetch later from LocalStorageManager.getEmail() form Sairaj branch
//       email: "s@gmail.com",
//       assID: "646e865bbbd0a8540ae3854a",
//     };

//     axios
//       .post("http://192.168.1.102:4000/api/v1/submit", payload)
//       .then((response) => {
//         console.log(response.data.message);
//         alert("Submitted SuccessFully!");
//       })
//       .catch((error) => {
//         console.error(error.response.data);
//         alert("Something Went Wrong");
//       });
//   };

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const response = await axios.post(
//   //           "http://192.168.1.102:4000/api/v1/sub-by-aid",
//   //           {
//   //             email: "s@gmail.com",
//   //             assignmentId: "646e865bbbd0a8540ae3854a",
//   //           }
//   //         );
//   //         const { code, ip, output } = response.data;
//   //         alert('Data Fetched Successfully!')
//   //         setCode(code);
//   //         setIp(ip);
//   //         setOutput(output);
//   //       } catch (error) {
//   //         console.error(error);
//   //         alert("Failed to fetch data");
//   //       }
//   //     };

//   //     fetchData();
//   //   }, []);

//   useEffect(() => {
//     const savedCode = localStorage.getItem("code");
//     if (savedCode) {
//       setCode(savedCode);
//     }
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("code", code);
//   }, [code]);

//   return (
//     <div className="problempage">
//       <div className="problemArea-1">
//         <div className="crumb">
//           <p>
//             <span style={{ color: "gray" }}>Labs &#8250; PSDL &#8250;</span>{" "}
//             <span style={{ fontWeight: "bold" }}>Assignment 1</span>
//           </p>
//         </div>
//         <div className="descr">
//           <p> Marks Obtained </p>
//           <div className="marks">
//             <p>{props.assignment.marks}</p>
//           </div>
//         </div>
//         <div className="heading-1">
//           <p
//             onChange={(name) => {
//               setName(name);
//             }}
//           >
//             {" "}
//             {name}
//           </p>
//         </div>
//         <div className="prblmdef">
//           <p
//             onChange={(statement) => {
//               setStatement(statement);
//             }}
//           >
//             {statement}
//           </p>
//         </div>
//         <div className="descr">
//           <p> Description</p>
//         </div>
//         <div className="description">
//           <p
//             onChange={(description) => {
//               setDescription(description);
//             }}
//           >
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
//         <div className="input-output-container">
//           <div className="input-output-header">Input Format</div>
//           <textarea
//             onChange={(inputtext) => {
//               setInputText(inputtext);
//             }}
//             className="input-textarea"
//             placeholder={inputtext}
//             readOnly
//           ></textarea>
//           <div className="input-output-header">Output Format</div>
//           <textarea
//             onChange={(outputtext) => {
//               setOutputText(outputtext);
//             }}
//             className="output-textarea"
//             placeholder={outputtext}
//             readOnly
//           ></textarea>
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
//           <div className="button-container">
//             <p className="scrollip">Scroll Down to Enter the Input</p>
//             <button className="buttons button-1" onClick={handleRunCode}>
//               Save
//             </button>
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
//             <button className="buttons button-2" onClick={handleSubmitCode}>
//               Submit
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

// export default Prblmstmt;
