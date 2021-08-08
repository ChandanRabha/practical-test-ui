export const reducer=(state=0,action)=>{
    switch(action.type){
        case 'saveData':
            return state=action.payload;
        default:
            return state;
    }
}