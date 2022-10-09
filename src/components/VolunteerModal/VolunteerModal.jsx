import React, { useState } from 'react'
import "./VolunteerModal.scss"

import bg from "../../assets/img/modalBgImg.png"

export default function VolunteerModal({ setshowModal }) {

    let [volunteerModal, setvolunteerModal] = useState({})

    let [showAlert, setshowAlert] = useState(false)


    // Прининмаем данные из формы
    let handleSubmit = (e) => {
        e.preventDefault()
        let form = e.target
        let obj = {}
        for (let i = 0; i < form.length; i++) {
            if (form[i].type !== 'submit') {
                obj[form[i].name] = form[i].value
                form[i].value = ''
            }
        }

        // obj - это готовый объект с данными из формы

        setvolunteerModal({...obj})
        setshowAlert(true)
        setTimeout(() => {
            setshowModal(false)
        }, 2000);
    }

    return (
        <div className="VolunteerModal">
            <div className="VolunteerModal_bgImg">
                <img src={bg} alt="" />
            </div>
            <div className="VolunteerModal_content">
                <h3 className="title">Стати волонтером</h3>

                {(showAlert)
                    ?
                    <div className="alert">ваше повідомлення успішно надіслано</div>
                    :
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" name="name" placeholder="Ім'я" />
                        <input type="text" name="phone" placeholder="Телефон" />
                        <input type="text" name="email" placeholder="E-mail" />
                        <textarea name="message" placeholder="Повідомлення"></textarea>
                        <button type="submit">Надіслати</button>
                    </form>
                }
            </div>
        </div>
    )
}