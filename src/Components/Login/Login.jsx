import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';
import './Login.css'

export default function Login(){
    const [signup, setSignup] = useState(false)
    const [credentials,setCredentials] = useState({
        username:"",
        password:"",
        cpassword:""
    })

    const {state, setUserAccIndex, createAcc}= useContext(GlobalContext)
    

    function handleChange(e){
        const {name,value} = e.target;
        setCredentials(prev=>(
            {...prev,
            [name]:value
            }
        ))
    }
    let isExist = true
    function handleClick(e){
        if(signup){
            const pin = credentials.password === credentials.cpassword && +credentials.password
            createAcc(credentials.username, +pin)
            window.location.href="/"
            alert("account created successfully")
        }else{
        console.log(state);
        
        const i = state.findIndex(user=>(

            user.owner.lower === credentials.username.lower && user.pin === +credentials.password
        ))
        console.log(i)
        if(typeof i !== "string" && i!==-1 && typeof i !== "undefined"){

            setUserAccIndex(i)
            
        }else{
            alert("account doesnt exist")
            e.preventDefault()
            setCredentials({
                username:"",
                password:""
            })
        }

        

        }
    }
    function handleAnchorClick(){
        setSignup(prev=>!prev)
    }
    console.log(isExist)
    console.log(credentials);
    return(
        <div className="login-main">
            <input className="inp" value={credentials.username} type="text" placeholder="USERNAME" name="username" onChange={handleChange}/>
            <input className="inp" value={credentials.password} type="password" placeholder="PASSWORD" name="password" onChange={handleChange}/>
            {signup && <input className="inp" value={credentials.cpassword} type="password" placeholder="CONFIRM PASSWORD" name="cpassword" onChange={handleChange}/>}
            <Link to="home">
            <button className="button" onClick={handleClick}>{signup?'SIGN UP':'LOGIN'}</button>
            </Link>
            {signup?<p className="account-status">Already have account? <a onClick={handleAnchorClick}>Login here.</a></p>:<p className="account-status">Don't have account? <a onClick={handleAnchorClick}>Create one here</a></p>}
            {/* <p>Don't have account <a>Create one here</a></p> */}
            <Outlet/>
        </div>
    )
}