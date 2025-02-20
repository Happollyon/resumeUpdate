
import './App.css';
import React from "react";
import MarkToCv from './pages/MarkToCv';
import JobDesc from './pages/JobDesc';
import Result from './pages/Result';
import { useState } from "react";

function App() {
  
  const [page, setPage] = useState("MarkToCv");

  function changePage() {
    if (page === "MarkToCv") {
      setPage("JobDesc");
    } else if(page === "JobDesc") {
      setPage("result");
    }
  }
  return (
    <div className="App">
      
      {page === "MarkToCv" && <MarkToCv />}
      {page === "JobDesc" && <JobDesc />}
      {page === "result" && <Result />}
      
      <div class = "button_MarkToCv" onClick={changePage} >Next</div>
    </div>
  );
}

export default App;
