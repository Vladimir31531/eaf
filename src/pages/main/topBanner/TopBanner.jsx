import React, { useEffect, useState } from 'react'
import MuiSimpleSlider from '../../../components/ui/Mui_simpleSlider/Mui_simpleSlider'
import Slide from './slide/Slide'
import axios from "axios"
import "./topBanner.scss"

export default function TopBanner() {

    /* let [Slides, setSlides] = useState([])

    useEffect(() => {
        let slides = []
        axios.get('http://localhost:3001/api/mpslides/getall').then(res => {
            slides = res.data
            let arr = slides.map((slide) => {
                return <Slide key={slide._id} slide={slide} />
            })
            setSlides(arr)
        })
    }, []) */


    let slides = [
        {
            id: 1,
            smallText: 'Европейский благотворительный фонд European Assistant Fund. Наша цель делать жизнь детей здоровой и счастливой. Присоединяйтесь к нам!',
            title: 'EUROPEAN ASSISTANT FUND',
            action: '/donate',
            bgImg: 'russia-ukraine-war.jpg',
        },
        /* {
            id: 2,
            smallText: 'Help people 2',
            title: 'Little Efforts Make Big Changes',
            action: '/about',
            bgImg: 'russia-ukraine-war.jpg',
        },
        {
            id: 3,
            smallText: 'Help people 3',
            title: 'Little Efforts Make Big Changes',
            action: '/about',
            bgImg: 'russia-ukraine-war.jpg',
        }, */
    ]

    let [Slides, setSlides] = useState([])

    useEffect(() => {
        let arr = slides.map((slide) => {
            return <Slide key={slide.id} slide={slide} />
        })
        setSlides(arr)
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