import React, { useEffect, useState } from 'react'
import MuiSimpleSlider from '../../../components/ui/Mui_simpleSlider/Mui_simpleSlider'
import Slide from './slide/Slide'
import axios from "axios"
import "./topBanner.scss"

export default function TopBanner() {

    let [Slides, setSlides] = useState([])

    useEffect(() => {
        let slides = []
        axios.get('http://localhost:3001/api/mpslides/getall').then(res => {
            slides = res.data
            let arr = slides.map((slide) => {
                return <Slide key={slide._id} slide={slide} />
            })
            setSlides(arr)
        })
    }, [])

    return (
        <div className="TopBanner">
            <MuiSimpleSlider
                myclass={'TopBanner_slider'}
                slides={Slides}
            />
        </div>
    )
}