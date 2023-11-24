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
                <h1>Viken kurs for voksene over 40 år</h1>
            </div>{/* headerText */}
            <div onClick={() => navigate('/Login')} className='login' id='clickProfile'>
                    <img src={usericon} alt="image" id='logosize'></img>
            </div>
        </header>
        <div>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <p>skriv in Emailen din her</p>
                email
            </div>
            <div>
                <p>skriv in passoret din her</p>
                password
            </div>
            <div>
                <button onClick={() => navigate('/')} id='loginbutton'>Login</button>
            </div>
            <div>
                <p>hvis du ikke har konto kan du lage en her.</p>
                <button onClick={() => navigate('/')} id='loginbutton'>Melde deg på</button>
            </div>
        </div>
        </>
    );
}
export default Login;