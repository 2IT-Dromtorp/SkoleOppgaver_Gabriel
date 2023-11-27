function Login({ closeLogin }) {
    return (
        <>
            <div className="login-popup">
                <div className="login-content">
                <button onClick={closeLogin}>X</button>
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
                        </div>{/* loginbuttonbox */}
                    </div>{/* loginbox */}
                </div>
            </div>
        </>
    );
}
export default Login;
