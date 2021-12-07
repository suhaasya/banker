import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Balance from './Balance';
import './Bank.css';
import LogoutTimer from './LogoutTimer';
import Movements from './Movements';
import Operations from './Operations';
import Summary from './Summary';
import WelcomeHeader from './WelcomeHeader';

export default function Bank(){
    const {userAccIndex,state}= useContext(GlobalContext)
    
    typeof userAccIndex === 'string' && (window.location.href="/")
    

    const total = state[userAccIndex].movements.reduce((acc,mov)=>mov+acc)
    const d = new Date();
    const totalDeposite = state[userAccIndex].movements.filter(mov=>mov>0).reduce((acc,mov)=>mov+acc)
    const totalWithdrawal = state[userAccIndex].movements.filter(mov=>mov<0).reduce((acc,mov)=>mov+acc,0)
    const interest = state[userAccIndex].movements.filter(mov => mov > 0)
    .map(deposit => (deposit * state[userAccIndex].interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    }).reduce((acc, int) => acc + int, 0);
    const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`

    return(
        <section className="bank-main">
            {/* Welcome header */}
            <WelcomeHeader name={state[userAccIndex].owner}/>

            {/* balance */}
            <Balance total={total} date={date}/>

            {/* movements */}
            <div className="movements">
                 {state[userAccIndex].movements.map((mov,i)=><Movements key={i} amount={mov} locale={state[userAccIndex].locale} date={state[userAccIndex].movementsDates[i]} />)}
            </div>

            {/* operations */}
            <Operations total={total}/>

            {/* Summary */}
            <Summary totalDeposite={totalDeposite} totalWithdrawal={totalWithdrawal} interest={interest}/>

            {/* logout timer */}
            <div className="logout-timer-div">
                <LogoutTimer time={5}/>
            </div>
        </section>
    )
}