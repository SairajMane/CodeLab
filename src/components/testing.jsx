// import React, { Component } from "react";
// import axios from "axios";

// class TestComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData() {
//     // Make your API call using axios or any other library
//     axios
//       .get("http://192.168.1.102:4000/api/v1/sub-by-aid")
//       .then(response => {
//         this.setState({ data: response.data });
//       })
//       .catch(error => {
//         console.error("Failed to fetch data:", error);
//       });
//   }

//   render() {
//     const { data } = this.state;

//     if (!data) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div>
//         <h1>Email: {data.email}</h1>
//         <h2>Assignment ID: {data.assignmentId}</h2>
//       </div>
//     );
//   }
// }

// export default TestComponent;
