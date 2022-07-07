import React, { useState } from "react";
// import data from "./data";
const Question = ({title, text}) => {
    const [showtext, setShowtext] = useState(false)
    
    return(
       <>
        <header>
            <h3>{title}</h3>
            <button onClick={() => setShowtext(!showtext)}>clk</button>
        </header>
        {showtext && <p>{text}</p>}
       </>
    )
}

export default Question