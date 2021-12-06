
export default (state, action) => {
    // state.map((s)=>console.log(s))
    console.log(state.length)
    switch(action.type){
        
        case 'REQ_LOAN':
            const afterLoan = state.map((acc)=>
                acc.accNo === state[action.userAccIndex].accNo
                ? {...acc, movements: [action.payload, ...acc.movements],movementsDates:[new Date().toISOString(),...acc.movementsDates],locale: 'en-IN'}
                : {...acc}
            )
            return afterLoan
        case 'TRANSFER':
            const afterTransfer = state.map((acc)=>{

                if(acc.accNo === state[action.userAccIndex].accNo){
                    return {...acc, movements: [-action.payload, ...acc.movements],movementsDates:[new Date().toISOString(),...acc.movementsDates],locale: 'en-IN'}
                }
                else if(acc.accNo === state[action.takerAccIndex].accNo){
                    return {...acc, movements: [action.payload, ...acc.movements],movementsDates:[new Date().toISOString(),...acc.movementsDates],locale: 'en-IN'}
                }
                else{
                    return {...acc}
                }
                })
            return afterTransfer
        case 'REMOVE':
            const afterRemove = state.filter((acc)=>acc.accNo!==state[action.userAccIndex].accNo)
            return afterRemove
        case 'CREATE':
            const afterCreate = [...state, {
                accNo: state.length + 1,
                owner: action.owner,
                movements: [1000],
                interestRate: 1,
                pin: action.pin,
                movementsDates: [new Date().toISOString()],
                currency: 'USD',
                locale: 'en-US',
            }]
            return afterCreate
        default:
            return state;
    }
}