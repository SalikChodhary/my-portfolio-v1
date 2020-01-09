import React, {useState, useContext, useEffect} from 'react';
import {InfoContext} from './InfoContext'
import DisplayItem from './DisplayItem'

const Display = () => {
    const [info, setInfo] = useContext(InfoContext)
    let data = [{name: "Education", headers: ["University of Toronto - Honours Bachelor of Science", "SATEC @ W.A. Porter C.I."], 
                 info:[`•	Computer Science, Co-op \n  
                 •	Entrance Scholarship: UofT Scholar ($7500 + $3000 every year after first) \n 
                 •	Expected Graduation: 2023`
                 , `High School \n
                 Graduated: 2022`]}, {name: "Projects", headers: ["Surviv.io implementation – Lead Developer", "Skittles Sorter"], info:[`•	Made a remake of the game surviv.io, which is a browser based, top down battle royale game. \n  
                 •	Used Node.js to send packets between server and client. \n
                 •	HTML to serve pages to the browser \n
                 •	CSS to create the layout  \n
                 •	Applied Mathematical and Physics knowledge to create a realistic game \n
                 •	Was able to successfully run the game in the school server, with up to 20 clients`, 
                 `•	Utilized an Arduino board and C++ to make an efficient skittle colour sorter with high accuracy and precision \n
                 •	Made use of a sensor and calibration using an algorithm, in different environments to give good results `]}, 
                 {name: "Work", headers: ["Software Developer - Google Developers’ Student Club", "Peer Tutor at SATEC @ W.A. Porter CI"], 
                info: [`•	DSC@UTSC is a non-profit which solves the growing need for affordable technology consultation and development services by providing technology consultation and software development \n
                •	Part of the Dev team, will work on various projects for various small non-profit organizations.`, `•	Helped peers in grade 9, 10, 11 and 12 with any problems in the following subjects – Math, Computer Science, Physics, Computer Engineering and Chemistry.  \n
                •	This utilized my versatility as everybody required a different way of teaching, and I was the one who was supposed to be able to cater to everybody’s needs.`]}, 
                {name: "Awards", headers:["UofT Scholar", "Medal of Distinction – SATEC @ WA Porter CI ", "Computer Science Award – SATEC @ WA Porter CI  " ], 
                info: [`•	Given to the students of the highest caliber in the applicant pool. \n
                •	Winners are presented with $7500 first year, and $3000 every year after that \n
                •	Maintained a 97% average in grade 12`, `•	Given to the students that finish with a 95%+ average in grade 12.`, 
                `•	Given to the student that shows the best understanding of the computer science subject and also achieves a high mark in that class \n
                •	Was able to finish with a 98% in computer science (Course code - ICS4U) `]}] 
    
    let ayyo = "Education"
    let i = 0

    const [aha, setaha] = useState("Education")
    const [headers, setHeaders] = useState(["University of Toronto - Honours Bachelor of Science", "SATEC @ W.A. Porter C.I."])
    const [body, setBody] = useState(["GAGA", "BABA"])

    useEffect(() => {
        setaha(info)
        for (i = 0; i < data.length; i++){
            if (data[i].name === info){
                setHeaders(data[i].headers)
                console.log(headers)
                setBody(data[i].info)
                console.log(body)
            }
        }
    }, [info])
    return(
        <div className="Display">
            {headers.map((header, j) => (
                <DisplayItem header={header} body={body[j]} key={j} />
            ))}

        </div>
    );
}

export default Display;