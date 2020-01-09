import React from 'react'; 

const DisplayItem = (props) => {
    return (
        <div className="DisplayItem"> 
            <h3>{props.header}</h3>
            <p className="Body">{props.body}</p>
            {props.header === "Surviv.io implementation – Lead Developer" ? <a href="https://github.com/Amielll/grade12-final">Repository</a> : <h1> </h1>}
        </div>
    )
}

export default DisplayItem; 