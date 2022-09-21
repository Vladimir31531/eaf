import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Stats from '../main/stats/Stats'
import "./about.scss"
import History from './history/History'
import Mission from './mission/Mission'

export default function About() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/about',
            title: 'About US',
        },
    ]

    let aboutPage = useSelector((state) => state.globalReducer.aboutPage)

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <Mission mission={aboutPage.mission} />
            <Stats />
            <History history={aboutPage.history} />
        </main>
    )
}