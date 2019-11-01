let  initialState={
    user:null,
    token:""
}

function reducer(state=initialState,{type,payload}){
    switch(type){
        case 'LOGIN':
            return{
                user,
                token
            }
         case 'LOGOUT':
             return {
                 user:null,
                 token:""
             }
         default:
              return  state;
    }

}
export default reducer;