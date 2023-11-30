function Course({ closeCourse }) {
    return (
        <>
            <div className="course-popup">
                <div className="course-content">
                    <div className="x-Buttondiv">
                        <button onClick={closeCourse} id="x-button">X</button>
                    </div>
                    <div className='coursebox'>
                        <p>du har melt deg på dette kurset</p>
                        <button onClick={closeCourse} id="loginbutton">OK</button>
                    </div>{/* Coursebox */}
                </div>
            </div>
        </>
    );
}
export default Course;
