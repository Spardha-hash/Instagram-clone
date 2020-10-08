import React from 'react'

const Stories = () => {
    const [state] = React.useState([
        {id:1, image:'/images/google.png',name:'Google'},
        {id:2, image:'/images/googlemeet.webp',name:'GoogleMeet'},
        {id:3, image:'/images/gmail.jpg',name:'Gmail'},
        {id:4, image:'/images/mitron.jpg',name:'Mitron'},
        {id:5, image:'/images/security.png',name:'Security'},
        {id:6, image:'/images/facebook.png',name:'Facebook'},
        {id:7, image:'/images/yahoo.jpg',name:'Yahoo'},
        {id:8, image:'/images/ibm.png',name:'IBM'},
    ])
    return (
        <div className="stories">
            {state.map(user =>(
            <div className="stories__info" key={user.id}>
                <div className="stories__img">
                    <span>
                        <img src={user.image} alt="" />
                    </span>
                </div>
                <div className="stories__name">
                    {user.name}
                </div>
            </div>
            
            ))}
            
        </div>
    )
}

export default Stories;
