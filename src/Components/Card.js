import React from 'react';


function Card(props) {
    
    return (
        <div className="card">
        <div className="card-img">
        <img src={props.img} alt="" />
        </div>
        <div className="card-text">
        <h3>{props.title}</h3>
        <p>{new Intl.NumberFormat('en-IN').format(props.totalNo)}</p>
        <div className="card-text-sub">
            <div className="card-text-subone sub">
                <h5>{props.subOne}</h5>
                <p>{new Intl.NumberFormat('en-IN').format(props.subOneValue)}</p>
            </div>
            <div className="card-text-subtwo sub">
                <h5>{props.subTwo}</h5>
                <p>{new Intl.NumberFormat('en-IN').format(props.subTwoValue)}</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Card
