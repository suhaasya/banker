
import { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import './Card.css'


export default function Card(props) {


    const [inpDet, setInpDet] = useState({
      acc_no: "",
      amount:"",
      user:"",
      pin:""
      
    })
    const {transfer,state,userAccIndex} = useContext(GlobalContext)
    const style={
      background:props.background,
    }
    
    function handleChange(e){
      const {value,name} = e.target;
      setInpDet(prev=>({...prev, [name]: +value}))
      
    }
    console.log(inpDet)


    function handleClick(e){
        e.preventDefault()
        
        if(props.btnTitle === 'close'){
          alert("suhas")
        }else{

          
          const takerI = state.findIndex(user=>(
            user.accNo === inpDet.acc_no
          ))
          if(takerI===userAccIndex){
            alert("you cant transfer to yourself")
          }else{
            transfer(inpDet.amount, takerI)
            
          }
          setInpDet({
            acc_no: "",
            amount:"",
            user:"",
            pin:""
          })
        }

      
        
    }

    return (
      <section className="card-main" style={style}>
          <h2>{props.title}</h2>
          <div className="form">
              <input type="text" value={props.inp1Name==="acc_no"?inpDet.acc_no:inpDet.user} name={props.inp1Name} className="form__input form__input--to" placeholder={props.inp1Placeholder} onChange={handleChange}/>
              <input type="text" value={props.inp2Name==="amount"?inpDet.amount:inpDet.pin} name={props.inp2Name}  className="form__input form__input--amount" placeholder={props.inp2Placeholder} onChange={handleChange}/>
          </div>
              <button className="form__btn form__btn--transfer" onClick={handleClick}>{props.btnTitle}</button>
      </section>
    );
  }