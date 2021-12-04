import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import './Login.css'

export default function Login(){

    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    })

    const {state, setUserAccIndex}= useContext(GlobalContext)


    function handleChange(e){
        const {name,value} = e.target;
        setCredentials(prev=>(
            {...prev,
            [name]:value
            }
        ))
    }

    function handleClick(e){
        // e.preventDefault()
        console.log(state);
        
        const i = state.findIndex(user=>(

            user.owner.lower === credentials.username.lower && user.pin === +credentials.password
        ))
        setUserAccIndex(i)
    }

    console.log(credentials);
    return(
        <div className="login-main">
            <input className="inp" type="text" placeholder="USERNAME" name="username" onChange={handleChange}/>
            <input className="inp" type="password" placeholder="PASSWORD" name="password" onChange={handleChange}/>
            <Link to="home">
            <button className="button" onClick={handleClick}>LOGIN</button>
            </Link>
            <Outlet/>
        </div>
    )
}