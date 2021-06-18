import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Action';
import { GrAddCircle } from "react-icons/gr";
import '../component/addtaskstyle.css'
import Filter from './Filter'
const AddTask = () => {

    const [newtask, setNewtask] = useState(
       {id:"",
       description:"",
       completed:"" ,
    });
//connect store
 const dispatch = useDispatch()
    const submitAdd=(e)=>{
        e.preventDefault();
if(newtask.description!=""){
    dispatch(add(newtask));
    setNewtask({...newtask,description:""});
            
}
else{
    alert("please enter a valid task!")
}    }
    const handleChange=(e)=>{
        setNewtask({
            ...newtask,
       description:e.target.value,
        })

       
    }
    return (
        
        <div>
    <Filter/>
<div className="addts">
            <input onChange={handleChange} type="text" placeholder="Add New Task" value={newtask.description} />
            <GrAddCircle className="adtask" onClick={submitAdd} type="submit">ADD</GrAddCircle>
        </div></div>
    )
}

export default AddTask
