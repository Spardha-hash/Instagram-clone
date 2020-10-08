import React from 'react'

const Comments = () => {
    return (
        <div className="comments">
            <div className="comments__container">
                <div className="comments__container-name"></div>
                <div className="comments__container-msg"></div>
            </div>
            <div className="comments__section">
                <input type="text" className="comments__input" placeholder="Add a comment" required />
            </div>
            
        </div>
    )
}

export default Comments
