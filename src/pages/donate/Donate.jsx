import React, { useEffect, useState } from 'react'
import "./donate.scss"
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MySelect from '../../components/ui/MySelect/MySelect'
import { useSelector } from 'react-redux'
import { getCuttedString } from '../../functions/helpers'

export default function Donate() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Home',
        },
        {
            slug: '/donate',
            title: 'Donate',
        },
    ]

    let amounts = [10, 20, 50, 100, 200]
    let [selectedAmount, setselectedAmount] = useState(1)

    let causes = useSelector((state) => state.globalReducer.causes)


    // Форма для данных донатера
    let [donateForm, setdonateForm] = useState({
        donateAmount: 0,
        selectedCause: null, // Выбранный донат
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })


    // Принимаем данные из формы
    let handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let obj = {}
        for (let i = 0; i < form.length; i++) {
            obj[form[i].name] = form[i].value
        }
        setdonateForm({ ...donateForm, ...obj })
        for (let i = 0; i < form.length; i++) {
            form[i].value = ''
        }
    }

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />

            <div className="Donate_w">
                <div className="Causes_bgText">Help people</div>
                <h4>donate</h4>
                <h3>Help people</h3>
                <div className="Donate_content">

                    <form id="donate_form" onSubmit={(e) => handleSubmit(e)}></form>

                    <div className="row">
                        <h4 className="title">How much would you like to donate?</h4>
                        <div className="row_content">
                            <div className="donate_amount">
                                {amounts.map((item, i) => {
                                    return <div key={i} className={"donate_item " + ((selectedAmount == i + 1) && "donate_item_selected")} onClick={() => {
                                        setselectedAmount(i + 1)
                                        setdonateForm({ ...donateForm, donateAmount: item })
                                    }} >${item}</div>
                                })}
                                <input type="text" placeholder="or Give a Custom Amount" name="amount" value={donateForm.donateAmount} onChange={(e) => {
                                    setselectedAmount(null)
                                    setdonateForm({ ...donateForm, donateAmount: e.target.value })
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="title">Сhoose cause</h4>
                        <div className="row_content">
                            <MySelect
                                items={causes}
                                setSelectedItem={setdonateForm}
                                SelectedItem={donateForm}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="title">Personal Information</h4>
                        <div className="row_content donate_form_row">
                            <div className="donator_info">
                                <input form="donate_form" name="firstName" type="text" placeholder="First Name" />
                                <input form="donate_form" name="lastName" type="text" placeholder="Last Name" />
                                <input form="donate_form" name="email" type="text" placeholder="Email" />
                                <input form="donate_form" name="phone" type="text" placeholder="Phone" />
                                <textarea form="donate_form" name="message" placeholder="Your Message"></textarea>
                            </div>
                            <button form="donate_form" className="donate_form_btn">donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}