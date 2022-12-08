import React from "react";
import gn from 'file:///C:/code/my/src/assets/img/icon/gmail-svgrepo-com.svg';
import x from "../img/x.png";

const ModalGmail = ({active, setActive}) => {
    return (
        <div className={active ? "modalGmail active" : "modalGmail"} onClick={() => setActive(false)}>
            <div className="modalGmail_item" onClick={e => e.stopPropagation()}>
                <a className="modalGmail_soc">
                    <img src={gn} />
                    <p>zxczxczxc33513@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default  ModalGmail;