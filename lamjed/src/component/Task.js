import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Delete, edit, done} from "../Redux/Action"
import { MdDone } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import './taskstyle.css'


const Task = ({todo}) => {
     const dispatch = useDispatch();
     const [text,setText] = useState(todo.description);
     const handleDone =()=>
     {
         dispatch(done(todo.id))
         
        
     }
     const handleEdit =()=>
     {
         dispatch(edit({id:todo.id,description:text,completed:todo.completed}))
     }
     const handleDelete =()=>
     {
         dispatch(Delete(todo.id))
         setText("")
        
     }
     const handleChange = (e) => {
        setText(e.target.value);

     }
    return (
        <div className="tsk">
          <input style={todo.completed?{textDecoration:"line-through"} : {textDecoration:"none"}} defaultValue={text} onChange={handleChange}/>
         <MdDone className="dn"  type="submit" onClick={handleDone}/>
           <BiEditAlt className="ed" type="submit" onClick={handleEdit}/> 
           <AiOutlineDelete className="dl" type="submit" onClick={handleDelete}/>
        </div>
    )}
export default Task
