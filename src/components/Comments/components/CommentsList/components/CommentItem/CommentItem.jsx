import React from 'react'
import "./CommentItem.css"

const CommentItem = ({comment}) => {
  return (
    <li className="comment-item">
    <div className="comment-avatar-column">
      <h3>{comment.avatar}</h3>
    </div>
    <div className="comment-divider"></div>
    <div className="comment-item-column">
      <h5>{comment.comment}</h5>
      <p className="comment-from">{comment.from}</p>
    </div>
  </li>
  )
}

export default CommentItem