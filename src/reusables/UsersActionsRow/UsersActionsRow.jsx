import React from 'react'
import { CiHeart} from "react-icons/ci";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";

import { UsersActionsItem } from './components';
import "./UsersActionsRow.css"

const UsersActionsRow = ({sample}) => {
    // console.log(sample)

 
    return (
    
        <div className="user-action-row">
          <UsersActionsItem action="love" count={sample.love} sample={sample} icon={<CiHeart/>}/>
          <UsersActionsItem action="likes" count={sample.likes} sample={sample} icon={<FiThumbsUp/>}/>
          <UsersActionsItem action="dislikes" count={sample.dislikes} sample={sample} icon={<FiThumbsDown/>}/>
          <UsersActionsItem action="comments" count={sample.comments} sample={sample} icon={<FaRegComment/>}/>
        </div>
    )
        


  
}

export default UsersActionsRow;