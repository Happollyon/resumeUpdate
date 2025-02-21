import React from "react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import Textarea from "react-textarea-autosize";
import "./css/MarkToCV.css";
const markdownStarter =`# Fagner Nunes

**Dublin, D13C6X6**  
**Tel:** +353 86456 4891  
**Email:** [fagnernunes11@gmail.com](mailto:fagnernunes11@gmail.com)  
**LinkedIn:** [Profile](https://www.linkedin.com/in/fagner%20nunes/)  

---

## **Professional Summary**
Computing graduate with a focus on Cybersecurity, experienced in developing secure and scalable applications using technologies such as React Native, Express.js, and AWS. Skilled in both frontend and backend development, cloud computing, and UI/UX design with expertise in Figma. Demonstrates strong capabilities in creating secure web applications, managing complex projects, and optimizing workflows to improve accuracy and efficiency. 

Experienced working in fast-paced environments, collaborating with global teams, and delivering high-quality results. Proficient in web application security, API development, cloud-based infrastructure, and data analysis. A proactive problem solver with a focus on contributing to team success and ensuring the smooth execution of projects.

---

## **Education**

**BSc (Hons) in Computing (Cybersecurity)**  
*National College of Ireland | Dublin, Ireland | 2024*

**Google Cybersecurity Specialization**  
*Google | Dublin, Ireland | 2024*  
*Credential ID:* [3Y0NDBUV8F1I](https://www.coursera.org/account/accomplishments/specialization/3Y0NDBUV8F1I)

---

## **Core Competencies**
- **Frontend Development:** Creating responsive web interfaces using HTML, CSS, JavaScript, and React.
- **Backend Development:** Building APIs and handling server-side logic with Node.js for smooth data flow.
- **Cloud Computing:** Managing applications on AWS for secure, scalable web services.
- **Web Security:** Applying secure coding practices to protect applications from vulnerabilities.
- **UI/UX Design:** Designing user-friendly interfaces with Figma to improve user experience.
- **Data Analysis:** Using SQL and Google Data Studio to analyze and visualize data for better decision-making.
- **Version Control:** Using Git for efficient code management and team collaboration.
- **Mobile App Development:** Developing cross-platform apps with React Native for seamless mobile experiences.
- **Project Management:** Coordinating teams and timelines to ensure successful project delivery.
- **Problem Solving:** Finding solutions to technical challenges and improving system performance.

---

## **Work History**

### **Special Projects Coordinator (Google Maps)**
*Cognizant | Dublin | January 2022 - Present*

- Manage cross-functional teams, overseeing the implementation of tools and workflows to improve the accuracy and efficiency of Google Maps data.
- Develop automated reports and dashboards using Google Data Studio and SQL to streamline KPI tracking and improve data analysis.
- Serve as the main point of contact for global stakeholders, managing their expectations and aligning project goals with business objectives.
- Provide training to employees on specialized workflows, ensuring consistent project quality and adherence to Google's guidelines.
- Collaborate with cross-functional teams to streamline project timelines and deliverables, ensuring smooth execution across global regions.
- Assist in enhancing internal processes by identifying key areas for improvement and developing strategies to optimize workflow efficiency.

### **Senior Process Executive (Google Maps)**
*Cognizant | Dublin | December 2020 - January 2022*

- Conducted research and analysis to improve the accuracy and reliability of Google Maps data, ensuring high-quality results in a fast-paced environment.
- Worked with business representatives to verify and validate real-world data, ensuring that updates were accurate and reliable.
- Consistently met performance targets while maintaining high standards of quality, contributing to the overall success of the team.
- Supported the creation of guidelines and best practices for data verification processes, helping to standardize procedures across the team.
- Collaborated with other teams to address complex data issues, ensuring continuous improvements in data quality and process efficiency.

### **Barista**
*Goose on the Loose | Dublin | November 2018 - November 2020*

- Provided excellent customer service and consistently produced high-quality beverages, leading to increased customer satisfaction.
- Managed inventory and supplies efficiently, helping to reduce waste and improve stock management.
- Trained new staff on company procedures and drink preparation, which improved overall team performance.

---

## **Technical Skills**
- **Frontend Development:** HTML | CSS | JavaScript | React  
- **Backend Development:** Node.js | WebSocket connections | REST APIs  
- **Cloud Computing:** AWS  
- **Security Tools:** SIEM Solutions (Splunk)  
- **Network Security:** Firewalls | Intrusion Detection Systems (IDS)  
- **UI/UX Design:** Figma  
- **Web Security:** Secure Coding Practices | Vulnerability Assessments | Frontend Security  
- **Version Control:** Git  
- **Mobile Development:** React Native  
- **State Management:** Redux | Context API  
- **Web Performance Optimization:** Lazy Loading | Code Splitting  
- **Data Analytics:** SQL | Google Data Studio  
- **DevOps:** Docker | Kubernetes  
- **Problem Solving:** Troubleshooting | Optimizing Web Performance  

---

## **Personal Attributes**
- **Detail-Oriented:** Paying close attention to accuracy and quality in coding, design, and project execution.
- **Analytical:** Solving complex problems and finding efficient, secure solutions to enhance performance.
- **Adaptable:** Quickly learning new technologies and thriving in fast-paced environments.
- **Team Player:** Working well with cross-functional teams and maintaining a positive, productive atmosphere.
- **Proactive:** Taking initiative to identify improvements and drive projects to successful completion.
- **Clear Communicator:** Explaining technical concepts in simple terms to ensure understanding for all audiences.
- **Calm Under Pressure:** Delivering quality work in high-demand situations and tight deadlines.
- **Solution-Focused:** Finding innovative solutions to challenges for smooth project execution.
- **Client-Focused:** Ensuring solutions meet client needs and business goals.

---

`

function MarkToCv() {
    const [markdown, setMarkdown] = useState(markdownStarter);

    function handleMarkdownChange(e) {
        setMarkdown(e.target.value);
    }
     
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