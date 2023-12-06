import './main.css';
function Home () {

    return (
        <>
            <div className='topBar'>
                {/* <button onClick={} id='' >Button</button> */}
                <button id='buttonTopBar1' ></button>
                <button id='buttonTopBar2' ></button>
                <button id='buttonTopBar3' ></button>
                <button id='buttonTopBar4' ></button>
            </div>{/* topBar */}
            <div className='textBox'>
                <div className='leftBox'>
                    <ul>
                        <li>Get - Request</li>
                        <li>Put - Request</li>
                        <li>Post - Request</li>
                    </ul>
                </div>{/* leftBox */}
                <div className='RightBox'>
                    <p>Delete</p>
                    <p>(Frivillig)</p>
                </div>{/* RightBox */}
            </div>{/* textBox */}
        </>
    );
}
export default Home;