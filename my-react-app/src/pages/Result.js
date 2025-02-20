import React from "react";
import ReactMarkdown from "react-markdown";
import "./css/Result.css";
import { useState } from "react";

function Result() {
    const [markdown, setMarkdown] = useState("resi;t    ");

    function handleMarkdownChange(e) {
        setMarkdown(e.target.value);
    }
     
    return(
    <div className="Result">
        <div className="Result_container">
            <ReactMarkdown className="Result_preview">
                {markdown}
            </ReactMarkdown>
        </div>
    </div>
    )
}

export default Result;