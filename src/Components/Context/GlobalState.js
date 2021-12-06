import { createContext, useReducer, useState, useEffect } from "react"
import AppReducer from "./AppReducer"
const initialState = [
    {
        accNo: 1,
        owner: 'Sahas',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
        movementsDates: [
          '2019-11-18T21:31:17.178Z',
          '2019-12-23T07:42:02.383Z',
          '2020-01-28T09:15:04.904Z',
          '2020-04-01T10:17:24.185Z',
          '2020-05-08T14:11:59.604Z',
          '2021-09-01T17:01:17.194Z',
          '2021-09-03T23:36:17.929Z',
          '2021-09-05T10:51:36.790Z',
        ],
        currency: 'EUR',
        locale: 'pt-PT', // de-DE
    },

    {
        accNo: 2,
        owner: 'Gaurav',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
        movementsDates: [
          '2019-11-01T13:15:33.035Z',
          '2019-11-30T09:48:16.867Z',
          '2019-12-25T06:04:23.907Z',
          '2020-01-25T14:18:46.235Z',
          '2020-02-05T16:33:06.386Z',
          '2020-04-10T14:43:26.374Z',
          '2020-06-25T18:49:59.371Z',
          '2020-07-26T12:01:20.894Z',
        ],
        currency: 'USD',
        locale: 'en-US',
    },

    {
      accNo: 3,
      owner: 'Piyush',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'INR',
    locale: 'en-IN',
    },

    {   accNo: 4,
        owner: 'Yesh',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
        movementsDates: [
          '2019-11-01T13:15:33.035Z',
          '2019-11-30T09:48:16.867Z',
          '2019-12-25T06:04:23.907Z',
          '2020-01-25T14:18:46.235Z',
          '2020-02-05T16:33:06.386Z',
        ],
        currency: 'USD',
        locale: 'en-US',
    }


]

export const GlobalContext = createContext(initialState)

// localStorage.setItem("state",JSON.stringify(initialState))
// JSON.parse(localStorage.getItem("state"))||
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer,JSON.parse(localStorage.getItem("state"))||initialState)
    localStorage.setItem("state", JSON.stringify(state))

    const [userAccIndex, setUserAccIndex] = useState("")
    const [takerAccIndex, setTakerAccIndex] = useState("")
    const [recIndex,setRecIndex] = useState("")

    console.log(recIndex)

    function reqLoan(movements){
      dispatch({
          type: 'REQ_LOAN',
          payload: movements,
          userAccIndex: userAccIndex,
          
      })
  }
  function transfer(movements,takerIndex){
      dispatch({
          type: 'TRANSFER',
          payload: movements,
          userAccIndex: userAccIndex,
          takerAccIndex: takerIndex,
          
      })
  }
  function remove(){
      dispatch({
          type: 'REMOVE',
          userAccIndex: userAccIndex,
          
      })
  }
  

    return(
        <GlobalContext.Provider value={{
        reqLoan,
        transfer,
        remove,  
        state:state, 
        userAccIndex:userAccIndex,
        setUserAccIndex: setUserAccIndex,
        takerAccIndex: takerAccIndex,
        setTakerAccIndex:setTakerAccIndex,
        
        }}>
            {children}
        </GlobalContext.Provider> 
    )
}