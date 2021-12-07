import React from 'react'
import SummaryHolder from './SummaryHolder'

export default function Summary(props) {
    return (
        <div className="summary">
            <SummaryHolder label='IN' value={props.totalDeposite}/>
            <SummaryHolder label='OUT' value={props.totalWithdrawal} color=''/>
            <SummaryHolder label='INTEREST' value={props.interest}/>
        </div>
    )
}
