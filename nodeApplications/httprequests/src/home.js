import './main.css';
import Select from './select';
import Update from './update';
import Insert from './insert';
import Delete from './delete';
import { useState } from 'react';

export default function Home () {
    const [content, setContent] = useState();

    function placeContentSelect() {
      setContent(<Select />);
    }

    function placeContentUpdate() {
      setContent(<Update />);
    }
  
    function placeContentInsert() {
     setContent(<Insert />);
   }
  
   function placeContentDelete() {
     setContent(<Delete />);
   }
    return (
        <>
            <div className='topBar'>
                <button id='buttonTopBar1' onClick={placeContentSelect}></button>
                <button id='buttonTopBar2' onClick={placeContentUpdate}></button>
                <button id='buttonTopBar3' onClick={placeContentInsert}></button>
                <button id='buttonTopBar4' onClick={placeContentDelete}></button>
            </div>{/* topBar */}
            <div className='textBox'>
                {content}
            </div>{/* textBox */}
        </>
    );
}