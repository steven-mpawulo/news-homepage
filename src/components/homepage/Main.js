import React from 'react'
import ImageDesktop from '../../images/image-web-3-desktop.jpg'

const Main = () => {
    return (
        <main>
            <div className='main'>
                <img src={ImageDesktop} alt="ilustration" />
                <div className="inner-container">
                    <div className="first-container">
                        <p>The bright future of web 3.0</p>
                    </div>
                    <div className="second-container">
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really a fulfilling promise.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main