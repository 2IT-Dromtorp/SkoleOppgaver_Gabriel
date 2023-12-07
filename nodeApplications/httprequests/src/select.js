import axios from 'axios';
import { useEffect } from 'react';

export default function Select() {

    useEffect(() => {

        axios
            .get("http://localhost:3000/")
            .then(data => console.log(data))
            .catch(error => console.log(error));
        
    }, []);

    return (
        <>
            <div >
                <p>Her kommer en tabell med select</p>
            </div>
        </>
    )
}