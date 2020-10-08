import React from 'react'
import Comments from "./Comments";
import { FaTelegramPlane, FaRegComment, FaRegHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";




const Posts = () => {
    const [state] = React.useState([
        {id:1, avatar:'Q', image:'/images/a.jpg',name:'Quick Create'},
        
        {id:2, avatar:'S', image:'/images/b.jpg',name:'Spardha'},
        
    ])
        return (
            
                <div className='posts'>
                    {state.map(user =>(
                    <>
                    <div classname="post" key={user.id}>
                    <div className='posts__header' >
                    
                        <div className='posts__header-avatar'>{user.avatar}</div>
                        <div className='posts__header-name'>{user.name}</div>
                   
                    </div>
                    <div className='posts__img'>
                        <img src={user.image} alt="" />
                    </div>
                    <div className="post__last">
                    <li>
                        <FaRegHeart className="post__icons" />
                    </li>
                    <li>
                        <FaRegComment className="post__icons" />
                    </li>
                    <li>
                        <FaTelegramPlane className="post__icons" />
                    </li>
                    <li style={{marginLeft: "460px"}}>
                        <BiBookmark className="post__icons" />
                    </li >
                    </div>
                    <Comments />
                    </div>
                    &nbsp; &nbsp;
                    </>
            ))}
        </div>
            
)
};

export default Posts
