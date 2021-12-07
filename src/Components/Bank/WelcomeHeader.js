import React from 'react'
import { Link } from 'react-router-dom';

export default function WelcomeHeader(props) {
    return (
        <div className="welcome-header">
                <h1>Welcome Back {props.name}</h1>
                <Link to="/">
                <h1 className="fas fa-sign-out-alt"></h1>
                </Link>
        </div>
    )
}
