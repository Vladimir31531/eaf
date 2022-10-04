import React, { useEffect, useState } from 'react'
import MuiTabs from '../../../components/ui/mui_tabs/MuiTabs'
import "./Requisites.scss"
import RequisitesCard from './RequisitesCard/RequisitesCard'

export default function Requisites() {

    let RequisitesTabs = [
        [
            {
                tabTitle: 'Реквізити рахунку UA'
            },
            {
                id: 1,
                title: 'Одержувач',
                value: 'Никоноров Антон Сергеевич',
            },
            {
                id: 2,
                title: 'Ідентифікаційний код отримувача',
                value: '3159419917',
            },
            {
                id: 3,
                title: 'Рахунок отримувача',
                value: 'IBAN UA87320478000002620413103026',
            },
            {
                id: 4,
                title: 'Призначення платежу',
                value: 'субсчета — 26204131063026.400101.980 Пожертвования',
            },
            {
                id: 5,
                title: 'Номер картки',
                value: '4966 8046 0227 3616',
            },
        ],
        [
            {
                tabTitle: 'Реквізити рахунку'
            },
            {
                id: 1,
                title: 'Swedbank',
                value: 'EUROPEAN ASSISTANCE FUND',
            }, 
            {
                id: 2,
                title: 'Ідентифікаційний код отримувача',
                value: '38805429',
            }, 
            {
                id: 3,
                title: 'IBAN',
                value: 'LV13HABA0551053065088',
            }, 
            {
                id: 4,
                title: 'Призначення',
                value: 'Пожертвование',
            }, 
        ]
    ]

    let [tabs, settabs] = useState([])
    let [tabContents, settabContents] = useState([])

    useEffect(() => {
        let tabs = []
        let tabContents = []
        RequisitesTabs.map((item) => {
            tabs.push({ label: item[0].tabTitle })
            tabContents.push(<RequisitesCard item={item}/>)
        })
        settabs(tabs)
        settabContents(tabContents)
    }, [])

    let TabsSX = (window.innerWidth > 500)
        &&
        {
            '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
                gap: '50px'
            },
            '& .MuiTabs-indicator': {
                backgroundColor: 'transparent',
                height: '0',
                top: 0,
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
                color: 'transparent',
            },
            '& .MuiButtonBase-root.Mui-selected': {
                backgroundColor: 'transparent',
                color: '#000',
            },
            '& .MuiButtonBase-root': {
                maxWidth: 'fit-content',
                padding: '0',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '1.3541666667vw',
                lineHeight: '185.6%',
                letterSpacing: '0.19em',
                color: '#fff',
                whiteSpace: 'nowrap',
            }
        }



    return (
        <div className="Requisites">
            <h4>реквізити</h4>
            <h3>Наші реквізити</h3>
            <div className="Requisites_content">
                <MuiTabs
                    tabs={tabs}
                    tabPanels={tabContents}
                    TabsSX={TabsSX}
                />
            </div>
        </div>
    )
}