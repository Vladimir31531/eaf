import React from 'react'
import { useSelector } from 'react-redux'
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import Stats from '../main/stats/Stats'
import "./about.scss"
import History from './history/History'
import Mission from './mission/Mission'
import Btn1 from '../../components/ui/btn1/Btn1'

export default function About() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Головна',
        },
        {
            slug: '/about',
            title: 'Про нас',
        },
    ]

    function downloadFile(pathToFile, file) {
        console.log(pathToFile + file)
        window.open(pathToFile + file);
        // window.location.href = pathToFile + file;
    }

    let aboutPage = useSelector((state) => state.globalReducer.aboutPage)

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />
            <Mission mission={aboutPage.mission} />
            <div className="aboutPage_btns">
                <Btn1 text={'Реєстрація'} func={() => downloadFile("./docs/", 'lemums.pdf')} />
                <Btn1 text={'Статут Фонду'} func={() => downloadFile("./docs/", 'european_assistance_fonda_statuti.pdf')} />
            </div>
            <Stats />
            {(aboutPage.history) && <History history={aboutPage.history} />}
        </main>
    )
}