import React from 'react'
import "./Partners.scss"

export default function Partners() {

    let Partners = [
        {
            id: 1,
            img: 'partner1.jpg',
        },
        {
            id: 2,
            img: 'partner2.jpg',
        },
        {
            id: 3,
            img: 'partner3.jpg',
        },
        {
            id: 4,
            img: 'partner4.jpg',
        },
        {
            id: 5,
            img: 'partner5.jpg',
        },
        {
            id: 6,
            img: 'partner6.jpg',
        },
    ]

    return (
        <div className="Partners">
            <div className="Partners_bgText">Наші партнери</div>
            <h4>партнери</h4>
            <h3>Наші партнери</h3>
            <div className="Partners_content">
                {Partners.map((partner) => {
                    return (
                        <div key={partner.id} className="Partners_card">
                            <img src={'./img/' + partner.img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}