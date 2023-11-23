import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import json from './course';
import { useEffect, useState } from 'react';

export default function course() {

    const navigate = useNavigate();

    let courseParams = useParams();

    return (
        <>
        <div className='profile-container'>

            <div className='profile-box'>
                <div className='sis'>
                    <h1>{courseParams.course} </h1>
                </div>
                <div className='sis'>
                    <button onClick={() => navigate(-1)} className='backbuttonlols'> Tilbake til hovedmeny </button>
                </div>
            </div>
        </div>
        </>
    )
}