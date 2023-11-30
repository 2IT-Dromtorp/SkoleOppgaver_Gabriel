import './main.css';
import React, { useState, useContext } from 'react'; // Import useContext here
import { useNavigate } from 'react-router-dom';
import usericon from './user_icon.svg';
import iconcolor from './favicon-vgs-color.svg';
import norway from './Norwegian.png';
import homeknowlege from './homeeducation.png';
import computerKnowledge from './basic-computer-knowledge-course.png';
import workout from './workout.png';
import topImage from './topimage.png';
import Login from './Login';
import Course from "./course";
import { AuthContext } from './AuthContext';
import Puplog from "./pupLog"

function Home() {
    const { isAuthenticated } = useContext(AuthContext);

    //Puplog
    const [isPuplogOpen, setPuplogOpen] = useState(false);

    const togglePuplog = () => {
      setPuplogOpen(!isPuplogOpen);
    };//end of Puplog

    
    //login pup-up
    const [isCourseOpen, setCourseOpen] = useState(false);

    const toggleCourse = () => {
      setCourseOpen(!isCourseOpen);
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
        <header>
           <div onClick={() => navigate('/')} className='login' id='clickProfile'>
                    <img src={iconcolor} alt="image" id='logosize2'></img>
            </div>
            <div className="headerText">
                <h1>Viken kurs for voksene over 40 år</h1>
            </div>{/* headerText */}
            <div className='clickProfile'>  
                <div onClick={togglePuplog}>
                    <img src={usericon} alt="image" id='logosize'></img>
                    {/* {isPuplogOpen && <Puplog closePuplog={togglePuplog} />} */}
                </div>
                    {isPuplogOpen && <Puplog closePuplog={togglePuplog} />}
            </div>
        </header>
            <div className="topBox">
                <div className='tiptop'>
                    <div className="topImageBox">
                        <img src={topImage} alt="topImage"></img>
                    </div>{/* topImageBox */}
                    <div className="topTextBox">
                        <div className="topText">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        </div>{/* topText */}
                        <div className="topText">
                            <h2>Lorem, ipsum.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        </div>{/* topText */}
                    </div>{/* topTextBox */}
                </div>
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
                        <button onClick={toggleCourse} id='courseButton' disabled={!isAuthenticated}>klikk her for å bli med på kurset</button>
                            {isCourseOpen && <Course closeCourse={toggleCourse} />}
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
                            <button onClick={toggleCourse} id='courseButton' disabled={!isAuthenticated}>klikk her for å bli med på kurset</button>
                            {isCourseOpen && <Course closeCourse={toggleCourse} />}
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
                            <button onClick={toggleCourse} id='courseButton' disabled={!isAuthenticated}>klikk her for å bli med på kurset</button>
                            {isCourseOpen && <Course closeCourse={toggleCourse} />}
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
                            <button onClick={toggleCourse} id='courseButton' disabled={!isAuthenticated}>klikk her for å bli med på kurset</button>
                            {isCourseOpen && <Course closeCourse={toggleCourse} />}
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