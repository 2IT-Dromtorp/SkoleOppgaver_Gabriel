import "./login.css";
import lake from "./LackImage.png";

export default function Login() {
        

    const handleLogin = () => {
        console.log('Login button clicked');
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${lake})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    };

    return (
        <>
            {/* coment */}
            <div style={backgroundImageStyle} id="Background">
                <div id="LoginBox">
                    <h2>Logg inn</h2>
                    <p>Brukernavn</p>
                    <label htmlFor="username"></label>
                    <input type="text" id="username" name="username"></input>
                    
                    <p>Passord</p>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password"></input><br/>
                    <button onClick={handleLogin} id="buttonLogin">Logg inn</button>
                </div>
            </div>
        </>
    );
}
