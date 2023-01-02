import React, { useState } from 'react'

import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App =()=> {
  const [progress,setProgress]=useState(0);
  const APIKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 6;
  const country = "in";
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* Loading bar below navbar */}
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" apiKey={APIKey} pageSize={pageSize} country={country} category={"general"} />} />
          <Route path="/about" element={<About setProgress={setProgress} />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general" apiKey={APIKey} pageSize={pageSize} country={country} category={"general"} />} />
          <Route path="business" element={<News setProgress={setProgress} key="business" apiKey={APIKey} ageSize={pageSize} country={country} category={"business"} />} />
          <Route path="entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={APIKey} pageSize={6} country={country} category={"entertainment"} />} />
          <Route path="health" element={<News setProgress={setProgress} key="health" apiKey={APIKey} pageSize={pageSize} country={country} category={"health"} />} />
          <Route path="science" element={<News setProgress={setProgress} key="science" apiKey={APIKey} pageSize={pageSize} country={country} category={"science"} />} />
          <Route path="sports" element={<News setProgress={setProgress} key="sports" apiKey={APIKey} pageSize={pageSize} country={country} category={"sports"} />} />
          <Route path="technology" element={<News setProgress={setProgress} key="technology" apiKey={APIKey} pageSize={pageSize} country={country} category={"technology"} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;


/************************* CLASS BASED COMPONENT ************************/


// import React, { Component } from 'react'

// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import LoadingBar from 'react-top-loading-bar'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// export default class App extends Component {
//   setProgress = (progress) => {
//     //Arrow function else 'this' will not be available here
//     this.setState({ progress: progress });
//   }
//   state = {
//     progress: 0
//   }
//   APIKey = process.env.REACT_APP_NEWS_API;
//   render() {
//     let pageSize = 6;
//     let country = "in";
    
//     return (
//       <>
//         <BrowserRouter>
//           <Navbar />
//           <LoadingBar
//             color='#f11946'
//             height={4}
//             progress={this.state.progress}
//           />
//           <Routes>
//             <Route path="/" element={<News setProgress={this.setProgress} key="general" apiKey={this.APIKey} pageSize={pageSize} country={country} category={"general"} />} />
//             <Route path="/general" element={<News setProgress={this.setProgress} key="general" apiKey={this.APIKey} pageSize={pageSize} country={country} category={"general"} />} />
//             <Route path="business" element={<News setProgress={this.setProgress} key="business" apiKey={this.APIKey} ageSize={pageSize} country={country} category={"business"} />} />
//             <Route path="entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.APIKey} pageSize={6} country={country} category={"entertainment"} />} />
//             <Route path="health" element={<News setProgress={this.setProgress} key="health" apiKey={this.APIKey} pageSize={pageSize} country={country} category={"health"} />} />
//             <Route path="science" element={<News setProgress={this.setProgress} key="science" apiKey={this.APIKey} pageSize={pageSize} country={country} category={"science"} />} />
//             <Route path="sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.APIKey} pageSize={pageSize} country={country} category={"sports"} />} />
//             <Route path="technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.APIKey} pageSize={pageSize} country={country} category={"technology"} />} />

//           </Routes>
//         </BrowserRouter>
//       </>
//     )
//   }
// }

