import { Link, useNavigate } from 'react-router-dom';
import TokTokLogo from '../SVG/TokTokLogo.svg'
import { Input } from 'antd';
import './SixDigit.scss';


    return ( 
        <header>
            <div className='text3'>
                <h1>Verify your <br /> Email</h1>
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
                    value={verificationCode}
                    onChange={(e)=>  setVerificationCode(e.target.value)} />
                <Input
                    type="submit"
                    value="Accept"
                    className="registration-button3"
                    onClick={verifyUser}
                />
                <Link to='/SignIn' className='skip'>
                    <p> Or Skip </p>
                </Link>
            </form>
            <div className='firma'>
                <p>TokTok Pte. Ltd. GmbH & Co. KG</p>
            </div>
        </header>
    );

export default SixDigit;
