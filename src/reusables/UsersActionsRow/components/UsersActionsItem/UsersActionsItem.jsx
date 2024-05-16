import React, {useState, useEffect} from 'react'
import { useAppContext } from '../../../../context/AppContext'
import "./UsersActionsItem.css"

const UsersActionsItem = ({count,sample,action,icon}) => {
  const [value,setValue] = useState(count)
  const {handleReactToSample,handleSiteView,toggleCommentsOnSample} = useAppContext();


  useEffect(()=>{
    // console.log("changeId")
setValue(count)
  },[sample.id,count])

  const handleAction = async()=>{
    if(action == "comments"){
      // sample.showComments = !sample.showComments
      // console.log(sample)
       toggleCommentsOnSample(sample)
      // handleSiteView(sample);
      return;
    }
    try{
      console.log("handle incrementing " + action +  " from " + count + " to " + (parseInt(count)+parseInt(1)) +" .")
      let response = await handleReactToSample(sample.id,action)
      console.log("handleAction response!",response);
      if(response.status == 200){
        setValue((value)=>value+1);
      }

    }
    catch(e){}
  }
  return (
    <div className="actions-column">
        <h5>{value}</h5>
        <button onClick={handleAction} className="reaction-btn">
            {icon}
        </button>
    </div>
  )
}

export default UsersActionsItem;
