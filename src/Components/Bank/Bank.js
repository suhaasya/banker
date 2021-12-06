import { useContext} from 'react'
import { Link } from 'react-router-dom';
import Card from '../Card/Card'
import LoanCard from '../Card/LoanCard'
import { GlobalContext } from '../Context/GlobalState';
import './Bank.css'
import Movements from './Movements';

export default function Bank(){
    const {userAccIndex,state}= useContext(GlobalContext)
    // console.log(state)
    // console.log(typeof userAccIndex)
    // console.log(userAccIndex)
    const total = state[userAccIndex].movements.reduce((acc,mov)=>mov+acc)
    const d = new Date();
    const totalDeposite = state[userAccIndex].movements.filter(mov=>mov>0).reduce((acc,mov)=>mov+acc)
    const totalWithdrawal = state[userAccIndex].movements.filter(mov=>mov<0).reduce((acc,mov)=>mov+acc,0)
    // console.log(totalDepositeArr)
    const interest = state[userAccIndex].movements.filter(mov => mov > 0)
    .map(deposit => (deposit * state[userAccIndex].interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    }).reduce((acc, int) => acc + int, 0);

    return(
        <section className="bank-main">
            {/* balance */}
            
            <div className="welcome-header">
                <h1>Welcome Back {state[userAccIndex].owner}</h1>
                <Link to="/">
                <h1 className="fas fa-sign-out-alt"></h1>
                </Link>
            </div>
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
                
                {state[userAccIndex].movements.map((mov,i)=><Movements key={i} amount={mov} locale={state[userAccIndex].locale} date={state[userAccIndex].movementsDates[i]} />)}
                
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
            <div className="summary">
                <div>
                <p className="summary_label summary_label_in">IN</p>
                <p className="summary_value summary_value_in">{totalDeposite}€</p>
                </div>
                <div>
                <p className="summary_label summary_label_out">OUT</p>
                <p className="summary_value summary_value_out">{totalWithdrawal}€</p>
                </div>
                <div>
                <p className="summary_label summary_label_interest">INTEREST</p>
                <p className="summary_value summary_value_interest">{interest}€</p>
                </div>
                
                
                
            </div>
        </section>
    )
}