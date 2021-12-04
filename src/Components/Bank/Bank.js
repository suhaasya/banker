import { useContext} from 'react'
import Card from '../Card/Card'
import LoanCard from '../Card/LoanCard'
import { GlobalContext } from '../Context/GlobalState';
import './Bank.css'
import Movements from './Movements';

export default function Bank(){
    const {userAccIndex,state}= useContext(GlobalContext)
    console.log(state)
    const total = state[userAccIndex].movements.reduce((acc,mov)=>mov+acc)
    const d = new Date();

    return(
        <section className="bank-main">
            {/* balance */}
            <h1>Welcome Back {state[userAccIndex].owner}</h1>
            <div className="balance">
                <div>
                    <p className="balance__label">Current balance</p>
                    <p className="balance__date">
                        As of <span className="date">{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</span>
                    </p>
                </div>
                <p className="balance__value">{total}€</p>
            </div>

            {/* movements */}
            <div className="movements">
                
                {state[userAccIndex].movements.map((mov,i)=><Movements key={i} amount={mov}/>)}
                
            </div>

            {/* operations */}
            <div className="operations">
                <Card 
                title="Transfer Money"
                inp1Placeholder="Transfer To"
                inp2Placeholder="amount"
                background="linear-gradient(to top left, #f9ca24, #f6e58d)"
                btnTitle="transfer"
                inp1Name = "acc_no"
                inp2Name = "amount"
                />
                <LoanCard 
                title="Request Loan"
                inp1Placeholder="amount"
                background="linear-gradient(to top left, #6ab04c, #badc58)"
                btnTitle="submit"
                />
                <Card 
                title="Close Account"
                inp1Placeholder="confirm user"
                inp2Placeholder="confirm pin"
                background="linear-gradient(to top left, #eb4d4b, #ff7979)"
                btnTitle="close"
                inp1Name = "user"
                inp2Name = "pin"
                />
            </div>
        </section>
    )
}