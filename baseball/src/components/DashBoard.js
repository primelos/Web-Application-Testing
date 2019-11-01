import React from 'react';


const DashBoard = props =>{

    return(
        <div data-testid="dashboard-id" className="dashboard-wrapper">
            <button onClick={props.addHit}>Hit</button>
            <button onClick={props.addBalls}>Ball</button>
            <button onClick={props.addFouls}>Foul</button>
            <button data-testid="strike-btn" onClick={props.addStrikes}>Strike</button>
        </div>
    );
};
export default DashBoard;