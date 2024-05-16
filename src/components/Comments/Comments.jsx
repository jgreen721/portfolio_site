import React from 'react'
import { AddComment,CommentsList } from './components'
import { useAppContext } from '../../context/AppContext'
import "./Comments.css"

const Comments = ({showComments,sample}) => {
  const {toggleCommentsOnSample} = useAppContext();
  
  // console.log(sample)

  return (
    <div className={showComments ? "comments-overlay" : "comments-overlay"}>
      <div className="comments-content">
        <button className="close-comments-btn" onClick={()=>toggleCommentsOnSample(sample)}>X</button>
          <AddComment sampleId={sample.id}/>
          <CommentsList sampleId={sample.id}/>
      </div>
    </div>
  )
}

export default Comments