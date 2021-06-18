const initialState={
    todos:[]
 }
 //state
export const reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case 'ADD_TASK':
            return {...state,todos:[...state.todos,{id:Math.random(),description:payload.description,completed:false}] };   
            case 'DELETE':
                return{...state,todos: state.todos.filter((el) => el.id !== payload)};  
                case 'EDIT':
                    return{...state,todos:state.todos.map(el=>el.id === payload.id? {...el ,description :payload.description} : el)};
                    case 'Done':
                        return{...state,todos:state.todos.map(el=>(el.id === payload) ? {...el ,completed:!el.completed} : el)}   
                            case 'FILTER':
                                return {...state,todos:state.todos.filter((el)=>el.completed===payload)}
                                
                            default:
                                return state;        
    }
    

}
