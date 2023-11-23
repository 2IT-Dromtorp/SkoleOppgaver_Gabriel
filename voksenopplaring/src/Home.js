import './main.css';
import { useNavigate } from 'react-router-dom';
import usericon from './user_icon.svg';
import iconcolor from './favicon-vgs-color.svg';
function Home() {// adds a home function.

    const navigate = useNavigate();
return(
    <>
    {/* <div className='safekeepin'>
        
    <button onClick={() => navigate('/login')} className='login' >login</button>
    </div> */}
        <header>
            <div className="logoBox">
                <img src={iconcolor} alt="Logo" id='logosize'></img>

            </div>{/* logo */}
            <div className="headerText">
                <h1>Viken kurs for voksene over 40 år</h1>
            </div>{/* headerText */}
            <button onClick={() => navigate('/login')} className='login' id='clickProfile'>
                    <img src={usericon} alt="image" id='logosize'></img>
            </button>
        </header>
            <div className="topBox">
                <div className="topImageBox">
                    <img src="" alt="topImage"></img>
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
            </div>{/* topBox */}
            <div className="row">
                
                <div className="course">
                
                    <div className="courseImage">
                    </div>{/* courseImage */}
                    <div className="courseText">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        
                    </div>{/* courseText */}
                </div>{/* course */}
                <div className="course">
                    <div className="courseImage">

                    </div>{/* courseImage */}
                    <div className="courseText">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                    </div>{/* courseText */}
                </div>{/* course */}
            </div>{/* row */}
            <div className="row">
                
                <div className="course">
                
                    <div className="courseImage">
                        {/* <button onClick={() => navigate('/login')} className='login' >login</button> */}
                    </div>{/* courseImage */}
                    <div className="courseText">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                        
                    </div>{/* courseText */}
                </div>{/* course */}
                <div className="course">
                    <div className="courseImage">

                    </div>{/* courseImage */}
                    <div className="courseText">
                        <h2>Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit ea natus quibusdam qui ratione, iure minus in accusantium expedita, sunt beatae aliquam maxime? Ut eius eos, perferendis qui molestias vel quos sed maiores at unde ducimus reiciendis esse, harum ullam. Ratione, perferendis tenetur laborum omnis aut quibusdam laboriosam quas?</p>
                    </div>{/* courseText */}
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
export default Home;//exports the home funtions to apps.js