import './home.css'; // imports all data inside home.css for design for the website.
import logo from './logo.svg'
function Home () {
    return(
        <>
            <header>
                <div className='logobox'>
                <img src='logo.svg' alt='text'></img>
                </div>{/* End of Logo Div */}
                <div className='headerText'>

                </div>{/* End of headerText Div */}
            </header>
            <div>
            </div>
            <footer>

            </footer>
        </>
    );
}
export default Home; // exports Home to app.js for desplaying the website in one go.