import React from 'react'
import './styles/ImgComponent.scss'
import bgimg from '../images/mydash-bg.png';

function alignImg() {
    return (
        <div className="container">
            <div className="bgimg">
                <img src={bgimg} alt="Background Img" />
            </div>
            <div className="textFont">
                <h2>Choose a date range</h2>  <br/>
                <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Mauris imperdiet bibendum.</p>
            </div>
        </div>
    )
}
export default alignImg;