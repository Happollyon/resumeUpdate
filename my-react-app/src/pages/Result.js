import React from "react";
import ReactMarkdown from "react-markdown";
import "./css/Result.css";
import { useState } from "react";

function Result({result}) {
    const [markdown, setMarkdown] = useState("resi;t    ");

    function handleMarkdownChange(e) {
        setMarkdown(e.target.value);
    }
     
    return(
    <div className="Result">
        <div className="Result_container">
            <div className="Result_preview" dangerouslySetInnerHTML={{ __html: result }}>
                
            </div>
        </div>
    </div>
    )
}

export default Result;