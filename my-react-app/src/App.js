
import './App.css';
import React from "react";
import MarkToCv from './pages/MarkToCv';
import JobDesc from './pages/JobDesc';
import Result from './pages/Result';
import { useState } from "react";

// get api key from sec.json
const sec = require('./pages/sec.json');
function App() {

const [messages, setMessages] = useState('');  
const [result, setResult] = useState({});
const [page, setPage] = useState("MarkToCv");

async function queryAPI() {
  const jobDesc = localStorage.getItem('jobDesc');
  const resume = localStorage.getItem('resume');

  const msg = [
    { role: "system", content: "you are an applicant tracking system." },
    {
        role: "user",
        content: `based on this job description ${jobDesc}, update this resume.Note that I am uploading the html of the resume. Only return the updated resume, no need to explain what you are doing. ONLY UPDATED RESUME ${resume} `,
    },
  ];
  console.log(msg)
  const  response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${sec.key}`},
    body: JSON.stringify({
      model:'gpt-4o-mini',
      messages:msg
    }),
  }).then(response => {
    if(response.status === 200){
      console.log("Success")
      response.json().then(data => {
        // remove \n from the response
        const regex = /(\r\n|\n|\r)/gm;
        console.log(data)
        const returnedResume = data.choices[0].message.content.replace(regex, "");
        
        setResult(returnedResume)
        
      })

 }else{
  console.log("Error " + response.text)
 }

})};

   function changePage() {
    console.log(page)
    if (page === "MarkToCv") {
      setPage("JobDesc");
    } else if(page === "JobDesc") {
      console.log("fagner")
      queryAPI();
      setPage("result");
    }
  }
  return (
    <div className="App">
      
      {page === "MarkToCv" && <MarkToCv/>}
      {page === "JobDesc" && <JobDesc/>}
      {page === "result" && <Result result={result}/>}
      
      <div class = "button_MarkToCv" onClick={changePage} >Next</div>
    </div>
  );
}

export default App;
