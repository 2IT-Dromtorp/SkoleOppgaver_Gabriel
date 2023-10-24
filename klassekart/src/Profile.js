import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import json from './profiles';
import { useEffect, useState } from 'react';

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
        if (item.navn.toLowerCase() === profileParams.profile.toLowerCase()) {
            console.log("correct. do something")
            console.log(item)

        }
        else{
            console.log("Error-Can't-get-the-info-for-elever-form-json")
        }
    })

    useEffect(() => {
        const matcbedItem = json.elever.find(item => item.navn.toLowerCase() === profileParams.profile.toLowerCase ());
        if (matcbedItem) {
            setprofile(matcbedItem)
        }
    }, [])

    return (
        <>
        <div className='profile-container'>

            <div className='profile-box'>
                <div className='sis'>
                    <h1>{profileParams.profile} </h1>
                </div>
                <p>Name: {profile.FullName}</p>
                <p>Alder: {profile.alder}</p>
                <p>E-mail: {profile.email}</p>
                <p>Tlf: {profile.Tlf}</p>
                <div className='sis'>
                    <button onClick={() => navigate(-1)} className='backbuttonlols'> Tilbake til hovedmeny </button>
                </div>
            </div>
        </div>
        </>
    )
}