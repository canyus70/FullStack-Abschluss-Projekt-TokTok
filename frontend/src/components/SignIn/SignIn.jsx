import TokTokLogo from '../SVG/TokTokLogo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import './SignIn.scss'
import { useState } from 'react';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();


    const loginUser = (event) => {
        event.preventDefault();
        if (!email || !password) {
        setErrorMessage("email and password must be defined");
        return;
        }

        fetch("http://localhost:4444/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        })
        .then((res) => res.json())
        .then(({ success, result, message }) => {
            if (!success){
                setErrorMessage(message || "Login failed");
                return 
            } 
            setErrorMessage(""); 
            setSuccessMessage(
            "Login successful, please go to Dashboard and enjoy!"
            );
            navigate('/')
        });
        
    };
    return ( 
        <header>
        <div className='text1'>
            <h1>Create your <br />
            Account</h1>
        </div>
        <div className='logoTok1'>
            <img src={TokTokLogo} alt="" />
        </div>
        <form className="reg-registration-form1">
            <Input      
            type='email'              
            className="reg-input1"
            placeholder="✉️ Email"
            value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
            
            <Input.Password 
            className="reg-input1" 
            placeholder="🔓 Password"
            value={password}
                onChange={(e)=> setPassword(e.target.value)} />
            {/* <Link to='/'> */}
            <Input
                type="submit"
                value="SignIn"
                className="registration-button1"
                onClick={loginUser}
            />
            {/* </Link> */}
<div className='forgot1'>
                    <p>Forgot the password?</p>
                </div>
                
            </form>
            <div className='SigIn1'>
                
                <p>Don’t have an account?</p>
                <Link className='Only1' to="/SignUp" >
                <p >SignUp</p>
                </Link>
            </div>
    </header>
    );
}

export default SignIn;