import {useEffect, useState} from 'react'
import './DigitalClock.css';

export default function DigitalClock() {

    let date = new Date ();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    const [currentTime, newTime] = useState(new Date);

    function clear(interval) {
        return clearInterval(interval);
    } 

    useEffect(() => {
        const myInterval = setInterval(() => {
            newTime(new Date);
            console.log(new Date);
        }, 1000)    
        
        return () => clear(myInterval);
    
    })



    return (
        <div className="DigClock">
            <header className="app-header">
                <h1>DigitalClock</h1>
                <h2>{currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}</h2>
            </header>
        </div>
    )
}