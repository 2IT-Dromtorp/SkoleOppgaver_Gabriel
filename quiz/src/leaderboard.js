import './Leaderboard.css'
export default function Leaderboard() {
    return(
        <>
            <div className='leaderbord'>
                <div id='controllbox'>
                    <div id='SideLine'></div>
                    <div id='insidecontrollbox'>
                        <div id='Line'></div>
                        <div className='Rank'>
                            1
                        </div>
                        <div id='Line'></div>
                    </div>
                    <div id='SideLine'></div>
                </div>
                <div id='controllbox'>
                    <div id='SideLine'></div>
                    <div id='insidecontrollbox'>
                        <div id='Line'></div>
                        <div className='Name'>
                            Name
                        </div>
                        <div id='Line'></div>
                    </div>
                    <div id='SideLine'></div>
                </div>
                <div id='controllbox'>
                    <div id='SideLine'></div>
                    <div id='insidecontrollbox'>
                        <div id='Line'></div>
                        <div className='Score'>
                            100/100
                        </div>
                        <div id='Line'></div>
                    </div>
                    <div id='SideLine'></div>
                </div>
            </div>
        </>
    )
}