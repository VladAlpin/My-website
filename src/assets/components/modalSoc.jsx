import React from "react";
import wec from 'file:///C:/code/my/src/assets/img/icon/whatsapp-svgrepo-com.svg';
import tg from 'file:///C:/code/my/src/assets/img/icon/telegram-svgrepo-com.svg';
import gn from 'file:///C:/code/my/src/assets/img/icon/gmail-svgrepo-com.svg';
import x from '../img/x.png';

const ModalSoc = props => {
  return(
    <div className={`modal ${props.show ? 'show ' : ''}`} onClick={props.onClose}>
      <div className="modal_item" onClick={e => e.stopPropagation()}>
        <div  className="modal_text">
          <p>*просто нажми</p>
        </div>
        <div className="modal_icon">
          <a className="modal_soc" target="_blank" href="https://wa.me/79147769814">
            <img src={wec} />
            <p>+7-914-776-98-14</p>
          </a>
          <a className="modal_soc" target="_blank" href="https://t.me/Vlad_Alpin">
            <img src={tg} />
            <p>@Vlad_Alpin</p>
          </a>
          <a className="modal_soc">
            <img src={gn} />
            <p>zxczxczxc33513@gmail.com</p>
          </a>
        </div>
        <div className="modal_close" >
          <img src={x} onClick={props.onClose} />
        </div>
      </div>
    </div>
  )
}

export default ModalSoc;