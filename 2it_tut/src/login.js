import "./login.css";
import lake from "./LackImage.png";
export default function Login () {
    const backgroundImageStyle = {
        backgroundImage: `url(${lake})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 'auto', // You can adjust the height as needed
      };    
    return(
        <>
            <div style={backgroundImageStyle} id="Background">
                <div id="LoginBox">
                    <h2>Logg inn</h2>
                    <p>Brukernavn</p>
                    <label for="username"></label>
                    <input type="text" id="username" name="username"></input>
                    
                    <p>Passord</p>
                    <label for="username"></label>
                    <input type="text" id="username" name="username"></input>
                    
                    <p>Bekreft Passord</p>
                    <label for="username"></label>
                    <input type="text" id="username" name="username"></input>
                </div>
            </div>
            
        </>
    );
}