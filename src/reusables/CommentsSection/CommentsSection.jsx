import React from 'react'
import {Comments} from "../../components"
import "./CommentsSection.css"

const CommentsSection = ({sample}) => {
  
  return (
    <div className={sample?.showComments ? "portfolio-comments" : "portfolio-comments hide-portfolio-comments"}>
    <Comments sample={sample} showComments={sample?.showComments}/>
    </div>
  ) 
}

export default CommentsSection