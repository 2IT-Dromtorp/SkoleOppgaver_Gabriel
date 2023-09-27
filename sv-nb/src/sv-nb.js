function Ex () {
    const lognok = true;
    let Spr;
    if (lognok) {
        Spr = <p>du er norsk.</p>;
    }else {
        Spr = <p>du är svensk.</p>;
    }
    return (
        <div>
        <h1>Norsk eller svensk</h1>
        <button disabled={lognok}>Click Me</button>;
        <p>{lognok}</p>
      </div>
    );
};
export default Ex;