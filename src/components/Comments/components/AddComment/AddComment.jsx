import React, {useRef, useState} from 'react'
import { useAppContext } from '../../../../context/AppContext';
import "./AddComment.css"


const AddComment = ({sampleId}) => {
    const {addComment} = useAppContext();
    const [alert,setAlert] = useState("")
    const formRef = useRef();



    const handleAddComment=async(e)=>{
        e.preventDefault();
        let formData = new FormData(formRef.current);
    
        let commentObj={
          comment:formData.get("comment"),
          avatar:formData.get("avatar"),
          from:formData.get("from"),
          sampleId:sampleId,
        }
        console.log(commentObj);
        let response = await addComment(commentObj)
        if(response.status == 200){
          formRef.current.querySelectorAll(".comment-input").forEach(input=>input.value = "");
          formRef.current.querySelector(".avatar-select").value = "😎"
          toggleAlert("Comment was added!:)")
        }
      }

      const toggleAlert = (msg)=>{
        setAlert(msg);
        setTimeout(()=>setAlert(""),2500)
      }

  return (
    <form ref={formRef} onSubmit={handleAddComment} className="add-comment-form hide-add-comment">
    <div className="add-comment-row">
      <div className="form-div">
      <input type="text" name="from" placeholder="Your name" autoComplete="off" className="form-control comment-input" />
      </div>
      <div className="form-div">
        <select className="avatar-select" name="avatar" id="avatar">
          <option value="😎">😎</option>
          <option value="😈">😈</option>
          <option value="🤪">🤪</option>
          <option value="🐵">🐵</option>
          <option value="🤓">🤓</option>
          <option value="😱">😱</option>
          <option value="🤩">🤩</option>
          <option value="🤠">🤠</option>
        </select>
      </div>
    </div>

    <input type="text" name="comment" placeholder="Add a comment!" className="form-control comment-input" autoComplete="off"/>
    <div className="add-btn-row">
      <button className="add-comment-btn">Add</button>
      <div className="comment-added-div">
        <h5 className={alert ? "add-comment-alert" : "add-comment-alert hide-add-alert"}>{alert}</h5>
      </div>
    </div>

  </form>
  )
}

export default AddComment