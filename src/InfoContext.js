import React, {useState, createContext} from 'react';

export const InfoContext = createContext();

export const InfoProvider = (props) => {
    const [info, setInfo] = useState("Education")
    return (
        <div>
            <InfoContext.Provider value={[info, setInfo]}>
                {props.children}
            </InfoContext.Provider> 

        </div>
    )
}