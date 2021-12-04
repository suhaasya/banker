
export default (state, action) => {
    // state.map((s)=>console.log(s))
    console.log(action)
    switch(action.type){
        
        case 'REQ_LOAN':
            const afterLoan = state.map((acc)=>
                acc.accNo === state[action.userAccIndex].accNo
                ? {...acc, movements: [action.payload, ...acc.movements]}
                : {...acc}
            )
            return afterLoan
        case 'TRANSFER':
            const afterTransfer = state.map((acc)=>{

                if(acc.accNo === state[action.userAccIndex].accNo){
                    return {...acc, movements: [-action.payload, ...acc.movements]}
                }
                else if(acc.accNo === state[action.takerAccIndex].accNo){
                    return {...acc, movements: [action.payload, ...acc.movements]}
                }
                else{
                    return {...acc}
                }
                })
            return afterTransfer
        default:
            return state;
    }
}