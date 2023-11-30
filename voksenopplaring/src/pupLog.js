import Login from "./Login";

function Puplog({ closePupLog }) {
    return (
        <>
            <div className="login-popup">
                <div className="login-content">
                    <div className="x-Buttondiv">
                        <button onClick={closePupLog} id="x-button">X</button>
                    </div>
                    <div className='loginbox'>
                        <div className='loginboxtopname'>
                            <h2>Login</h2>
                        </div>{/* loginboxtopname */}
                        <div className='emailbox'>
                            <p>skriv in Emailen din her</p>
                            <input type="E-mail" className='email' placeholder="Email" id="inputCSS"/>
                        </div>{/* emailbox */}
                        <div className='passwordbox'>
                            <p>skriv in passord din her</p>
                            <input type="password" className='password' placeholder="passord" id="inputCSS"/>
                        </div>{/* passwordbox */}
                        <div className='loginbuttonbox'>
                            <button onClick={closePupLog} id="loginbutton">Login</button>
                        </div>{/* loginbuttonbox */}
                        <div className='loginbuttonbox'>
                            <p>har du ikke konto. lag en her!</p>
                            <button onClick={closePupLog} id="loginbutton">Melde deg på</button>
                        </div>{/* loginbuttonbox */}
                    </div>{/* loginbox */}
                </div>
            </div>
        </>
    );
}
export default Puplog;
