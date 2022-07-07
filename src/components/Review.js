import React, { useState } from "react";
import data from "./data";

const Review = () => {
    const [index, setIndex] = useState(0)
    const {name, age, image} = data[index]

    const checkNumber = (number) => {
        if(number > data.length -1){
            return 0
        }
        if(number < 0){
            return data.length - 1
        }
        return number;
    }

    const prevperson = () => {
        setIndex((index)=> {
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }
    const nextperson = () => {
        setIndex((index)=> {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    return(
        <div>
            <h2>Review Component</h2>
            <div>
                <img src={image} alt="image" width="50px" height="50px"/>
                <p>{name}</p>
                <p>{age}</p>
                <button onClick={prevperson}>prev</button>
                <button onClick={nextperson}>next</button>
            </div>
        </div>
    );
}

export default Review