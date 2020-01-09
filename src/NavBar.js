import React, {useState, useContext} from 'react';
import './App'
import './App.css'
import {InfoContext} from './InfoContext'

const Nav = () => {

    const [info, setInfo] = useContext(InfoContext)
    const printName = (e) => {
        setInfo(e.target.className)

    }

    return (
        <div>
          <ul id="nav">
            <button className="Education" onClick={printName}>Education</button>
            <button className="Projects" onClick={printName}>Projects</button>
            <button className="Work" onClick={printName}>Work</button>
            <button className="Awards" onClick={printName}>Awards</button>
            
          </ul>
        </div>
    );
}


export default Nav;