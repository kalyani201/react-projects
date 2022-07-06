import React, { useState } from "react";

const Card = ({ tour, setTour }) => {
    const [readmore, setReadmore] = useState(false);
    const removeTour = (id) => {
        const newTour = tour.filter((tour) => tour.id !== id)
        setTour(newTour);
        // console.log(newTour)
    }
    return (
        <div>
            {
                tour.map((tourInfo) => {
                    const { id, name, info, image, price } = tourInfo
                    return (
                        <div key={id} className="card">
                            <img src={image} alt="image" width="100%" />
                            <div>
                                <p><b>{name}</b></p>
                                <p>{price}</p>
                            </div>
                            <p>
                                {readmore ? info : `${info.substring(0, 120)}...`}
                                <button onClick={() => setReadmore(!readmore)}>{readmore ? "Read Less" : "Read More"}</button>
                            </p>
                            <button onClick={() => removeTour(id)}>Not Interested</button>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Card