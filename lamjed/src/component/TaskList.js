import React from 'react'
import Task from "./Task"
import {useSelector} from 'react-redux'

const TaskList = () => {
    const TaskList = useSelector(state => state.todos)
    return (
        <div>

                {TaskList.map(el=><Task todo={el}/>)
                }
                
            
        </div>
    )
}

export default TaskList
