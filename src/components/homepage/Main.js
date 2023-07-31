import React from 'react'
import ImageDesktop from '../../images/image-web-3-desktop.jpg'
import './main.css'

const Main = () => {
    return (
        <main>
            <div className='main'>
                <img src={ImageDesktop} alt="ilustration" />
                <div className="side-container">
                    <h1>New</h1>
                    <h2>Hygrogen Vs Electric Cars</h2>
                    <p>Will hydrogen-fueled cars catch up to EVs?</p>
                    <hr />
                    <h1>The Downsides of AI Artistry</h1>
                    <p>What are the possible adverse effects of on demand AI image generation?</p>
                    <hr />
                    <h1>Is VC Funding Drying Up?</h1>
                    <p>Private funding by VC firms is down 50% YOY. We will take a look at what it means</p>
                </div>
                <div className="lower-container">
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