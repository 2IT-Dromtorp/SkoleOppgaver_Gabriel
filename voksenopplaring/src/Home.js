import './main.css';
import { useNavigate } from 'react-router-dom';
import usericon from './user_icon.svg';
import iconcolor from './favicon-vgs-color.svg';
import norway from './Norwegian.png';
import homeknowlege from './homeeducation.png';
import computerKnowledge from './basic-computer-knowledge-course.png';
import workout from './workout.png';
import topImage from './topimage.png';
import React, { useState } from 'react';
import Login from './Login';
function Home() {
    //login pup-up
    const [isLoginOpen, setLoginOpen] = useState(false);

    const toggleLogin = () => {
      setLoginOpen(!isLoginOpen);
    };//end of login pup-up

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Event handler function
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    let loginbuttonDiv;

    if (isLoggedIn) {
        loginbuttonDiv = <p>Welcome back!</p>;
    } else {    
        loginbuttonDiv = (
        <div>
            <p>Please sign in.</p>
            {/* Button to trigger the login */}
            <button onClick={handleLogin}>Log In</button>
        </div>
        );
    }
    
  
    const navigate = useNavigate();
return(
    <>
    {/* <div className='safekeepin'>
        
    <div onClick={() => navigate('/login')} className='login' >login</div>
    </div> */}
        <header>
           <div onClick={() => navigate('/')} className='login' id='clickProfile'>
                    <img src={iconcolor} alt="image" id='logosize'></img>
            </div>
            <div className="headerText">
                <h1>Viken kurs for voksene over 40 år</h1>
            </div>{/* headerText */}
            <div className='clickProfile'>
                <div onClick={toggleLogin}>
                <img src={usericon} alt="image" id='logosize'></img></div>
                {isLoginOpen && <Login closeLogin={toggleLogin} />}
            </div>
        </header>
            <div className="topBox">
                <div className="topImageBox">
                    <img src={topImage} alt="topImage"></img>
                </div>{/* topImageBox */}
                <div className="topTextBox">
                    <div className="topText">
                        {/* <h2>{loggingOnOrOff}.</h2> */}
                        <h2>{loginbuttonDiv}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                    </div>{/* topText */}
                    <div className="topText">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                    </div>{/* topText */}
                </div>{/* topTextBox */}
            </div>{/* topBox */}
            <div className="row">
                
                <div className="course">
                
                    <div className="courseImage">
                        <img src={computerKnowledge} alt="image" id='courseImageshow'></img>
                    </div>{/* courseImage */}
                    <div>
                        <div className="courseText">
                            <h2>Grunnleggende datakunnskap</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        </div>{/* courseText */}
                        <div className='courseButton'>
                            <button onClick={() => navigate('/computerKnowledge')} id='courseButton' >klikk her for å bli med på kurset</button>
                        </div>
                    </div>
                </div>{/* course */}
                <div className="course">
                    <div className="courseImage">
                        <img src={norway} alt="image" id='courseImageshow'></img>
                    </div>{/* courseImage */}
                    <div>
                        <div className="courseText">
                            <h2>Norsk</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        </div>{/* courseText */}
                        <div className='courseButton'>
                            <button onClick={() => navigate('/norway')} id='courseButton' >klikk her for å bli med på kurset</button>
                        </div>
                    </div>
                </div>{/* course */}
            </div>{/* row */}
            <div className="row">
                
                <div className="course">
                
                    <div className="courseImage">
                        <img src={homeknowlege} alt="image" id='courseImageshow'></img>
                    </div>{/* courseImage */}
                    <div>
                        <div className="courseText">
                            <h2>Heimkunnskap</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        </div>{/* courseText */}
                        <div className='courseButton'>
                            <button onClick={() => navigate('/homeknowlege')} id='courseButton' >klikk her for å bli med på kurset</button>
                        </div>
                    </div>
                </div>{/* course */}
                <div className="course">
                    <div className="courseImage">
                        <img src={workout} alt="image" id='courseImageshow'></img>
                    </div>{/* courseImage */}
                    <div>
                        <div className="courseText">
                            <h2>Kroppsøving</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        </div>{/* courseText */}
                        <div className='courseButton'>
                            <button onClick={() => navigate('/workout')} id='courseButton' >klikk her for å bli med på kurset</button>
                        </div>
                    </div>
                </div>{/* course */}
            </div>{/* row */}
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
export default Home;