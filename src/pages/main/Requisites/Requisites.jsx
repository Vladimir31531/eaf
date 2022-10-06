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
                title: 'Swedbank',
                value: '40008316962',
            },
            {
                id: 2,
                title: 'IBAN',
                value: 'LV13HABA0551053065088',
            },
            {
                id: 3,
                title: 'Призначення',
                value: 'Пожертвування',
            },
        ],
        [
            {
                tabTitle: 'Реквізити криптовалют'
            },
            {
                id: 1,
                title: 'USDT TRC20',
                value: 'TF6tCv222n8muCrv7SdfCzZNNHfG25B2Wj',
            }, 
            {
                id: 2,
                title: 'USDT ERC20',
                value: '0xd74959d40252c936Ef377ED6A7D609A0074Ceeea',
            }, 
            {
                id: 3,
                title: 'BTC',
                value: 'bc1qdgpztwn9y0up5zq99m25vq6kw0sn6zv5k3fypk',
            }, 
            {
                id: 4,
                title: 'ETH',
                value: '0xd74959d40252c936Ef377ED6A7D609A0074Ceeea',
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
        ?
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
        :
        {
            minHeight: 'auto',

            '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
                gap: '20px'
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
                borderBottom: '1px solid #000'
            },
            '& .MuiButtonBase-root': {
                maxWidth: 'fit-content',
                minHeight: 'auto',
                padding: '0',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '2.3541666667vw',
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