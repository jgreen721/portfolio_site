import React, {useEffect, useState} from 'react'
import {CommentItem} from "./components"
import "./CommentsList.css"
import { useAppContext } from '../../../../context/AppContext'

const CommentsList = ({sampleId}) => {
  const [filteredComments,setFilteredComments] = useState([])
  const {comments} = useAppContext()

  useEffect(()=>{
    // filter comments
    // console.log('sampleId',sampleId);
    let temp = comments;
    temp = temp.filter(t=>t.sampleId == sampleId);
    setFilteredComments(temp)
  },[comments,sampleId])
  return (
    <ul className="comments-area comments-list">
     
    {filteredComments.length > 0 ? filteredComments.map((c,i)=>(
      <CommentItem key={i} comment={c}/>   
    ))
  
  :
  <h4 className="mid-thin" style={{color:"black"}}>This sample has no comments :(</h4>
  }
  </ul>
  )
}

export default CommentsList