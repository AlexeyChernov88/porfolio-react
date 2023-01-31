import React from "react";

const Contacts = () => {
    return (
        <div className="contacts">
            <h2 className="contacts__header header">Контакты:</h2>
            <div className="contacts__item">
                <b>Тел.: </b>
                <a href="tel:+799911060107">+7 (999) 110-61-07</a>
            </div>
            <div className="contacts__item">
                <b>Телеграмм: </b>

                <a href="https://t.me/alexblackskja" target="blank">
                    https://t.me/alexblackskja
                </a>
            </div>
            <div className="contacts__item">
                <b>Email: </b>
                <a href="mailto:chernoff.aleksey@gmail.com">allc1988@mail.ru</a>
            </div>
        </div>
    );
};

export default Contacts;
