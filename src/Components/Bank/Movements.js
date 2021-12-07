
import './Bank.css'


export default function Movements(props) {
    const date = new Date(props.date)
    return (
        <div className="movements__row">
        {props.amount>0?<div className="movements__type movements__type--deposit">deposit</div>:<div className="movements__type movements__type--withdrawal">withdrawal</div>}
        <div className="movements__date">{date.toLocaleDateString('en-GB')}</div>
        <div className="movements__value">{props.amount}€</div>
    </div>
    );
  }