
import './Card.css'
import { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function LoanCard(props) {
  const [amount, setAmount] = useState("")
  const {reqLoan} = useContext(GlobalContext)
  const style={
    background:props.background,
  }
  function handleChange(e){
    const {value} = e.target;
    const transferAmount = +value;
    setAmount(transferAmount)
  }

  function handleClick(e){
    console.log(amount)

      e.preventDefault()
      
      function operation(){
        reqLoan(amount)
        setAmount("")
      }

      setTimeout(operation, 3000)
  }


    return (
      <section className="card-main" style={style}>
          <h2>{props.title}</h2>
          <div className="loanform">
              <input type="text" value={amount} name={props.inp2Placeholder}   className="form__input form__input--loanAmount" placeholder={props.inp1Placeholder} onChange={handleChange}/>
              <button className="form__btn form__btn--transfer" onClick={handleClick}>{props.btnTitle}</button>
          </div>
              
      </section>
    );
  }