import Login from "./login";
import Signup from "./signup";
import Profile from "./profile";
import Course from "./course";
import Course2 from "./course2";
import Course3 from "./course3";
import Course4 from "./course4";
import './main.css';

function Home() {// adds a home function.
    
return(
    <>
        <header>
            <div className="logoBox">
                <img src="" alt="Logo"></img>

            </div>{/* logo */}
            <div className="headerText">
                <h1>Viken kurs for våksene over 40 år</h1>
            </div>{/* headerText */}
            <div className="profileBox">
                <img src="" alt="image"></img>
            </div>{/* ProfileBOx */}
        </header>
        <div>
            <div>
                <div>
                    <img src="" alt="image"></img>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
        <div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
        <footer>
            <div>

            </div>
            <div>
                <div>

                </div>
                <div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </footer>
    </>
);
}
export default Home;//exports the home funtions to apps.js