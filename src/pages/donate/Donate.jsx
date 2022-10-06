import React, { useEffect, useState } from 'react'
import "./donate.scss"
import Breadcrumbs from '../../components/ui/breadcrumbs/Breadcrumbs'
import MySelect from '../../components/ui/MySelect/MySelect'
import { useSelector } from 'react-redux'
import { getCuttedString } from '../../functions/helpers'
import Btn1 from '../../components/ui/btn1/Btn1'

export default function Donate() {

    let breadcrumbsItems = [
        {
            slug: '/',
            title: 'Головна',
        },
        {
            slug: '/donate',
            title: 'Підтримати',
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

    useEffect(() => {
        window.onload = () => {
            let iframe = document.getElementById("donateIframe");
            let iframeContent = iframe.contentDocument;
            iframeContent.body.innerHTML = iframeContent.body.innerHTML +
            `<style>
                .donation-widget {
                    margin: 0;
                }
                .basic-color-background {
                    background-color: #000;
                }
            </style>`;
        }
    })







    

    return (
        <main className="main">
            <Breadcrumbs items={breadcrumbsItems} />

            <div className="Donate_w">
                <div className="Causes_bgText">Підтримати</div>
                <h4>Роби добро</h4>
                <h3>Допоможіть людям</h3>
                {/* <div className="Donate_content">

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
                </div> */}
                <iframe id="donateIframe" src="https://donorbox.org/embed/europeanassistancefund?default_interval=o&enable_auto_scroll=false" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" width="100%" style={{maxWidth: '423px', minHeight: '600px', minWidth: '250px', maxHeight: 'none!important'}}></iframe>

                <div className="forms_btns">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhIYUK98aMXCa6xzi46Oy-DYqBERT4rFjv8R9GEGFxgjBxtQ/viewform" target="_blank">
                        <Btn1 text={'Заявка на допомогу'} func={() => { }} />
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSezukLw9XSyfp9ifIWBUrk10chm5wtIWNb_TBKsnh1B1LbK5g/viewform" target="_blank">
                        <Btn1 text={'Анкета для волонтерів'} func={() => { }} />
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3bTiVd-YpjddOXzETX4HtaqmrQYdPk4It_xhRrrj6bBXL4Q/viewform" target="_blank">
                        <Btn1 text={'Заявка на допомогу від дитячого психолога'} func={() => { }} />
                    </a>
                </div>
            </div>

            <script src="https://donorbox.org/widget.js" paypalexpress="false"></script>
        </main>
    )
}