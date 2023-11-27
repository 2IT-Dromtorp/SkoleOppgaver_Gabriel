import { useNavigate } from 'react-router-dom';
import usericon from './user_icon.svg';
import iconcolor from './favicon-vgs-color.svg';
function Signupbutton() {
    const navigate = useNavigate();

    return(
        <>
        <header>
           <div onClick={() => navigate('/')} className='login' id='clickProfile'>
                    <img src={iconcolor} alt="image" id='logosize'></img>
            </div>
            <div className="headerText">
                <h1>Melde deg på</h1>
            </div>{/* headerText */}
            <div onClick={() => navigate('/Login')} className='login' id='clickProfile'>
                    <img src={usericon} alt="image" id='logosize'></img>
            </div>
        </header>
        <div className='loginbox'>
            <div className='loginboxtopname'>
                <h2>Melde deg på</h2>
            </div>{/* loginboxtopname */}
            <div className='emailbox'>
                <p>skriv in Emailen din her</p>
                <input type="E-mail" className='email' placeholder="Email"/>
            </div>{/* emailbox */}
            <div className='passwordbox'>
                <p>skriv in passord din her</p>
                <input type="password" className='password' placeholder="passord"/>
            </div>{/* passwordbox */}
            <div className='passwordbox'>
                <input type="password" className='password' placeholder="passord"/>
            </div>{/* passwordbox */}
            <div className='loginbuttonbox'>
                <button onClick={() => navigate('/')} id='signupbutton'>Melde deg på</button>
            </div>{/* loginbuttonbox */}
        </div>{/* loginbox */}
        </>
    );
}
export default Signupbutton;