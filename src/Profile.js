import React from 'react';
import './App.css'
import DP from './test.jpeg'

const Profile = () => {
    return(
        <div className="Profile">
            <div className="ImageBox"><img src={DP} alt="test"></img></div>
            <div className="ContentBox">
                <h1>Salik Chodhary</h1>
                <h4><i>salikchou@gmail.com</i></h4>
                <h4><i>(437)922-5901</i></h4>
                <p>Innovative and self-motivated first year student at University of Toronto, pursuing a specialist degree in Computer Science – Software Engineering Stream. Aiming to achieve a Software Engineering position in a company that allows me to reach my potential and make a positive impact for the company. Capable of applying my programming, analytical and communication skills in a team setting.</p>
            </div>
        </div>
    )

}

export default Profile; 