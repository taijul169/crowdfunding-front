import React from 'react'

const Singleinput = (props) => {
    return (
        <div className={`form-group ${props.col}`}>
            <label htmlFor="refId" className={props.mandetory}>{props.labelName}</label>
            <input type={props.type} className="form-control" id="inputEmail4" placeholder={props.placeholder} name={props.name} accept={props.attribute}/>
        </div>
    )
}

export default Singleinput
