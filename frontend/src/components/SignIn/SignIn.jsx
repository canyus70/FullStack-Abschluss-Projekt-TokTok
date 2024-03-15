import TokTokLogo from '../SVG/TokTokLogo.svg'
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import './SignIn.scss'


const SignIn = () => {
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
            placeholder="✉️ Email"/>
            
            <Input.Password 
            className="reg-input1" 
            placeholder="🔓 Password" />
            <Link to='/'>
            <Input
                type="submit"
                value="SignIn"
                className="registration-button1"
            />
            </Link>
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