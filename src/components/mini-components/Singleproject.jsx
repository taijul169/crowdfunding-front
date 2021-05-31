import React from 'react';
import { NavLink } from 'react-router-dom';

const Singleproject = (props) => {
    return (
        <div>
            <div class="card" >
                <div class="card-body">
                    <div className="card-img-wrap w-100" style={{backgroundImage:`url(${props.img})`}}>
                    </div>
                
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.details}</p>
                    <div className="buttton text-right">
                    <NavLink to="" className="primary-button" style={{fontSize:'8px',fontWeight:'600'}}>View Details</NavLink>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Singleproject
