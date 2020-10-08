import React from 'react'

const Sidebar = () => {
    const [state] = React.useState([
        {id:1, image:'/images/adidas.jpg',name:'Adidas'},
        {id:2, image:'/images/amazon.jpg',name:'Amazon'},
        {id:3, image:'/images/apple.png',name:'Apple'},
        {id:4, image:'/images/cisco.gif',name:'Cisco'},
        {id:5, image:'/images/infosys.png',name:'Infosys'},
        {id:6, image:'/images/Intel.png',name:'Intel'},
        {id:7, image:'/images/toyota.png',name:'Toyota'},
        {id:8, image:'/images/lg.png',name:'LG'},
    ])
    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user-avatar">S</div>
                <div className="sidebar__user-name">Spardha</div>
            </div>
            <div className="sidebar__list">
                <h3>Suggestions for you</h3>
                {state.map(user => (
                    <div className="sidebar__list-user" key={user.id}>
                        <div className="sidebar__list-a" >
                            <div className="sidebar__list-a-img">
                                <img src={user.image} alt="" />
                            </div>
                            <div className="sidebar__list-a-name" >{user.name}</div>
                        </div>
                    
                    <div className="sidebar__list-b">
                        <a href="">Follow</a></div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default Sidebar
