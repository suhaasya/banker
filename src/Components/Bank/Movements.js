
import './Bank.css'

// <div class="movements__type movements__type--withdrawal">withdrawal</div>

export default function Movements(props) {
    return (
        <div class="movements__row">
        {props.amount>0?<div class="movements__type movements__type--deposit">deposit</div>:<div class="movements__type movements__type--withdrawal">withdrawal</div>}
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">{props.amount}€</div>
    </div>
    );
  }