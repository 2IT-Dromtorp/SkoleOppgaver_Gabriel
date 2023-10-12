import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import json from './profiles';
import { useState } from 'react';

export default function Profile() {

    const navigate = useNavigate();

    let profileParams = useParams();

    const [profile, setprofile] = useState({
            "navn" : null,
            "FullName" : null,
            "alder" : null,
            "email" : null,
            "Tlf" : null,
            "image": null
    })



    json.elever.map((item, index) => {
        if (item.navn.toLowerCase() == profileParams.profile.toLowerCase()) {
            console.log("correct. do something")
            console.log(item)

        }
        else{
            console.log("Error-Can't-get-the-info-for-elever-form-json")
        }
    })

    return (
        <>
        <div className='profile-container'>

            <div className='profile-box'>

                <h1> Dette er profilen til {profileParams.profile} </h1>
                <p>name: {}</p>


                <button onClick={() => navigate(-1)} className='backbuttonlols'> Tilbake til hovedmeny </button>

            </div>
        </div>
        </>
    )
}