import React from 'react'
import ImageDesktop from '../../images/image-web-3-desktop.jpg'
import './main.css'

const Main = () => {
    return (
        <main>
            <div className='main'>
                <div className="left-side-container">
                <img src={ImageDesktop} alt="ilustration"  className='image-web'/>
                    <div className="inner-container">
                    <div className="first-container">
                        <p className='bright-text'>The Bright Future of Web 3.0?</p>
                    </div>
                    <div className="second-container">
                        <p className='web3-text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really a fulfilling promise.</p>
                        <button>READ MORE</button>
                    </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <h1>New</h1>
                    <h2>Hygrogen Vs Electric Cars</h2>
                    <p>Will hydrogen-fueled cars catch up to EVs?</p>
                    <hr />
                    <h2>The Downsides of AI Artistry</h2>
                    <p>What are the possible adverse effects of on demand AI image generation?</p>
                    <hr />
                    <h2>Is VC Funding Drying Up?</h2>
                    <p>Private funding by VC firms is down 50% YOY. We will take a look at what it means</p>
                </div>
            </div>
            
        </main>
    )
}

export default Main