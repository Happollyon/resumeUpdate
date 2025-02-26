import React from "react";
import "./css/JobDesc.css";
import { useState } from "react";
import { useEffect } from "react";


function JobDesc() {
    const [jobDesc, setJobDesc] = useState(() => {
        return localStorage.getItem('jobDesc') || "";
    });

    useEffect(() => {
        localStorage.setItem('jobDesc', jobDesc);
    }, [jobDesc]);
    function handleChange(event) {
        setJobDesc(event.target.value);
    }
    return(
        <div className="JobDesc">
            <h1>Job Description</h1>
            <p>Job Description will be here</p>

            <textarea className="textAreaJob" value={jobDesc} onChange={handleChange}>

            </textarea>

        </div>
    )
}


export default JobDesc;