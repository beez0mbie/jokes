import React from 'react'

function Joke(props){
    return (
        <div className='joke'>
            <h3><font color="#eaa519">&#9635;{props.name}&#9635;</font></h3>
            <p style={{display: props.question ? 'block' : 'none'}}>Question: {props.question}</p>
            <p style={{color: !props.question && "#888888"}}>Punch: {props.punchLine}</p>
            <hr/>
        </div>
    );
};

export default Joke;