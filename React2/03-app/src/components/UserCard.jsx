import React from 'react'

const UserCard = (props) => {
    console.log(props.data);
    
    return(
        <div className=''>
            <img className='' src="" alt="" />
            <p>{props.data.name.first}</p>
            <p>{props.data.phone}</p>
            <p>{props.data.location.city}, {props.data.location.state}</p>
        </div>
    )
}

export default UserCard;