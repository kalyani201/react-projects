import React from "react";


const List = ({people}) => {
    return(
        <div>
            <ul>
                {people.map( (person) => {
                    const {id, name, image, age} = person;
                    return (
                       <article key={id}>
                        <img src={image} alt="image" width="20px" height="20px"/>
                        <div>
                            <h3>{name}</h3>
                            <p>{age} years</p>
                        </div>
                       </article>
                    )
                })}
            </ul>
        </div>
    )
}

export default List