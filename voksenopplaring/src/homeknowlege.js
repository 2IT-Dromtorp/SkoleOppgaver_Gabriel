import { useNavigate } from 'react-router-dom';
import usericon from './user_icon.svg';
import iconcolor from './favicon-vgs-color.svg';
import topImage from './topimage.png'
function Homeknowlege() {
    const navigate = useNavigate();
    return(
        <>
            <header>
                <div onClick={() => navigate('/')} className='login' id='clickProfile'>
                        <img src={iconcolor} alt="image" id='logosize'></img>
                </div>
                <div className="headerText">
                    <h1>Heimkunnskap</h1>
                </div>{/* headerText */}
                <div onClick={() => navigate('/Login')} className='login' id='clickProfile'>
                        <img src={usericon} alt="image" id='logosize'></img>
                </div>
            </header>
            <div className="topBox">
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
            </div>{/* topBox */}
        </>
    );
}
export default Homeknowlege;