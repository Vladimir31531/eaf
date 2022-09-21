import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Btn2 from '../../../components/ui/btn2/Btn2'
import "./AboutSection.scss"

export default function AboutSection() {

    let aboutSection = []
    aboutSection[0] = useSelector((state) => state.globalReducer.aboutPage.mission[0])

    return (
        <div className="AboutSection">
            <div className="AboutSection_bgText">about us</div>
            <div className="AboutSection_images">
                {aboutSection[0].images.map((img, i) => (<img key={i} src={'./img/' + img} alt="" className={"img" + (i + 1)} />))}
            </div>
            <div className="AboutSection_content">
                <h4>about us</h4>
                <h3>{aboutSection[0].bigTitle}</h3>
                <div className="text">
                    <p>{aboutSection[0].text}</p>
                </div>
                <Link to={'/about'}>
                    <Btn2 text={'Read more'} func={() => { }} />
                </Link>
            </div>
        </div>
    )
}