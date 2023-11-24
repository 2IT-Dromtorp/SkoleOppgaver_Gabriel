import { useNavigate } from 'react-router-dom';
import usericon from './user_icon.svg';
import iconcolor from './favicon-vgs-color.svg';
function Login() {
    const navigate = useNavigate();
    return(
        <>
        <header>
           <div onClick={() => navigate('/')} className='login' id='clickProfile'>
                    <img src={iconcolor} alt="image" id='logosize'></img>
            </div>
            <div className="headerText">
                <h1>Login</h1>
            </div>{/* headerText */}
            <div onClick={() => navigate('/Login')} className='login' id='clickProfile'>
                    <img src={usericon} alt="image" id='logosize'></img>
            </div>
        </header>
        <div className='loginbox'>
            <div className='loginboxtopname'>
                <h2>Login</h2>
            </div>{/* loginboxtopname */}
            <div className='emailbox'>
                <p>skriv in Emailen din her</p>
                <input type="E-mail" className='email' placeholder="Email"/>
            </div>{/* emailbox */}
            <div className='passwordbox'>
                <p>skriv in passord din her</p>
                <input type="password" className='password' placeholder="passord"/>
            </div>{/* passwordbox */}
            <div className='loginbuttonbox'>
                <button onClick={() => navigate('/')} id='loginbutton'>Login</button>
                <p>hvis du ikke har konto kan du lage en her.</p>
                <button onClick={() => navigate('/Signupbutton')} id='signupbutton'>Melde deg på</button>
            </div>{/* loginbuttonbox */}
        </div>{/* loginbox */}
        <footer>
            <div className="footBox">
            <h3>text</h3>
                <ul>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
            </div>{/* footBox */}
            <div className="footBox">
                <div className="foottext">
                <h3>text</h3>
                <ul>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
                </div>{/* foottext */}
                <div className="mediaBox">
                    <div className="SosalBox">

                    </div>{/* SosalBox */}
                    <div className="SosalBox">

                    </div>{/* SosalBox */}
                    <div className="SosalBox">

                    </div>{/* SosalBox */}
                </div>{/* mediaBox */}
            </div>{/* footBox */}
            <div className="footBox">
            <h3>text</h3>
                <ul>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
            </div>{/* footBox */}
        </footer>
        </>
    );
}
export default Login;