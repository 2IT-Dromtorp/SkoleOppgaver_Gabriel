import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateUserForm() {
    function handleSubmit(event) {
        const [updateElevData, setupdateElevData] = useState([])
        event.preventDefault();
        console.log('sybmitted');
        const updateElevDatarequest = () => {
            azios
                .get('http:')
                .then(response => {
                    setupdateElevData(response.date);
                })
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>ny Hobby:</label>
            <input type='text' placeholder='john'/>
            <label>ElevID:</label>
            <input type='number'/>
            <input type='submit' value={"Submit"}/>
        </form>
        </>
    );
}