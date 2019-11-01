import React from 'react';


const Display = (props) =>{

return (
    <div>
        <article>
            <h2>Strikes: </h2>
            <p>{props.strikes}</p>
        </article>
        <article>
            <h2>Balls: </h2>
            <p>{props.balls}</p>
        </article>

    </div>
)
}

export default Display;