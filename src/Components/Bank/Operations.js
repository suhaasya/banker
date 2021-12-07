import React from 'react'
import Card from '../Card/Card'
import LoanCard from '../Card/LoanCard'

export default function Operations(props) {
    return (
        <div className="operations">
                <Card 
                title="Transfer Money"
                inp1Placeholder="Transfer To"
                inp2Placeholder="amount"
                background="linear-gradient(to top left, #f9ca24, #f6e58d)"
                btnTitle="transfer"
                inp1Name = "acc_no"
                inp2Name = "amount"
                total={props.total}
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
    )
}
