import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import json from './profiles';

export default function Profile() {

    const navigate = useNavigate();

    let profileParams = useParams();

    json.elever.map((item, index) => {
        if (item.navn.toLowerCase() == profileParams.profile.toLowerCase()) {
            console.log("correct. do something")
        }
        else{
            console.log("Wrong. Dose nothing")
        }
    })

    return (
        <>
        <div className='profile-container'>

        <div className='profile-box'>

            <h1> Dette er profilen til {profileParams.profile} </h1>
            <button onClick={() => navigate(-1)} className='backbuttonlols'> Tilbake til hovedmeny </button>

        </div>
        </div>
        </>
    )
}