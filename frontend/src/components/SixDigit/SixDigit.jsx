import TokTokLogo from '../SVG/TokTokLogo.svg'
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import './SixDigit.scss'

const SixDigit = () => {
    return ( 
        
        <header>
            <div className='text3'>
                <h1>Create your <br />
                Account</h1>
            </div>
            <div className='logoTok3'>
                <img src={TokTokLogo} alt="" />
            </div>
            <form className="reg-registration-form3">
                <Input
                    type="text"
                    name="Verify"
                    id="Verify"
                    className="reg-input3"
                    placeholder="Verify Code"
                />
                <Link className='LinkFrom' to='/'>
                <Input
                    type="submit"
                    value="Accept"
                    className="registration-button3"
                />
                </Link>
                <Link 
                to='/'
                className='skip'>
                <p> Or Skip </p>
                </Link>
                
                </form>
                <div className='firma'>
                    <p>TokTok Pte. Ltd. GmbH & Co. KG</p>
                </div>
        </header>
        
    );
}

export default SixDigit;