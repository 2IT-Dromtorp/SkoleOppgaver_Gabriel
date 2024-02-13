import Header from './header';
import Footer from './footer';
import Leaderboard from './leaderboard'
import './home.css'
export default function Home () {
    return(
        <>
        <Header />
            <h1>Quiz</h1>
            <button>Start</button>
            <Leaderboard />
        <Footer />
        </>
    )
}