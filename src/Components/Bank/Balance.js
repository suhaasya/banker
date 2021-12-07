import React from 'react'

export default function Balance(props) {
    return (
        <div className="balance">
                <div>
                    <p className="balance__label">Current balance</p>
                    <p className="balance__date">
                        As of <span className="date">{props.date}</span>
                    </p>
                </div>
                <p className="balance__value">{props.total}€</p>
        </div>
    )
}
