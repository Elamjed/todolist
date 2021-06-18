import React from 'react'
import { useDispatch } from 'react-redux'
import {filter} from '../Redux/Action'
import './filterstyle.css'
const Filter = () => {
const dispatch = useDispatch();
    const handleDone =()=>
    {
        dispatch(filter(true))

    }
    const handlenotDone =()=>
    {
        dispatch(filter(false))

    }
    const handleall=()=>
    {

    }
    
    return (
       
        <div className="fltr">
           <button className="fltrdone" onClick={handleDone}>Done</button>
           <button className="fltrnotdone" onClick={handlenotDone} >Not Done</button> 
           <button className="fltrall" onClick={handleall} >All</button> 

        </div>
    )
}

export default Filter
