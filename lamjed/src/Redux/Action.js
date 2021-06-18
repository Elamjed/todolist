export const add=(payload)=>{
    return{
        type:"ADD_TASK",
        payload
    }
};
export const Delete =(payload)=>{
    return{
        type:"DELETE",
        payload
    }
};
export const edit=(payload)=>{
    return{
        type:"EDIT",
        payload
    }
};
export const done=(payload)=>{
    return{
        type:"Done",
        payload
    }
};
export const filter=(payload)=>{
    return{
        type:"FILTER",
        payload
    }
};

