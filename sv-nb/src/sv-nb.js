import React, { useState } from 'react';

function Ex () {
      const [isTrue, setIsTrue] = useState(false);
      const [svensk, setsvensk] = useState(false);
      const trfa = () => {
        if (isTrue, svensk) {
          setIsTrue(false);
          setsvensk(false);
        } else {
          setIsTrue(true);
          setsvensk(true);
        }
      };
    return (
    <>
        <header>
            <h1>text</h1>
        </header>
        <div>
            <h1>Norsk eller svensk</h1>
            <button onClick={trfa}>{isTrue ? 'N' : 'S'}</button>
            <p>{isTrue ? 'Du er norsk' : 'Du är svensk'}</p>
        </div>
    </>
    );
};
export default Ex;