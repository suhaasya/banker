import React from 'react'

export default function SummaryHolder(props) {
    
    return (
        <div>
            <p className="summary_label">{props.label}</p>
            <p className={props.label==='OUT'?"summary_value summary_value_out":"summary_value"}>{props.value}€</p>
        </div>
    )
}
