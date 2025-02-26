import React from "react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import Textarea from "react-textarea-autosize";
import "./css/MarkToCV.css";
import { useEffect } from "react";

function MarkToCv() {
    const [markdown, setMarkdown] = useState(() => {
        return localStorage.getItem('resume') || "";
    });

    function handleMarkdownChange(e) {
        setMarkdown(e.target.value);
    }
    useEffect(() => {
        localStorage.setItem('resume', markdown);
    }, [markdown]);
    return(
    <div className="MarkToCv">
        <div className="MarkToCv_container">
            <textarea className="textArea" value={markdown} onChange={handleMarkdownChange}> 

            </textarea>
            <div className="MarkToCv_preview" dangerouslySetInnerHTML={{ __html: markdown }}>
                
            </div>
        
{/*
            <ReactMarkdown className="MarkToCv_preview">
                {markdown}
            </ReactMarkdown>

*/}          
        </div>
    </div>
    )

}

export default MarkToCv;