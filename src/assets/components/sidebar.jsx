import React, {useState} from "react";
import img from '../img/Rectangle2.webp';
// import my from '../img/Group.png';
// import my from '../img/загрузить.png';
import my from '../img/my.webp';
import tg from 'file:///C:/code/my/src/assets/img/icon/telegram-svgrepo-com.svg';
import gn from 'file:///C:/code/my/src/assets/img/icon/gmail-svgrepo-com.svg';
import wec from 'file:///C:/code/my/src/assets/img/icon/whatsapp-svgrepo-com.svg';
import ModalSoc from "./modalSoc";
import {Link} from "react-router-dom";
import ModalGmail from "./modalGmail";


const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [activeGmail, setActiveGmail] = useState(false);

  return (
    <div className='sidebar'>
      <div className='sidebar_item'>
        <img className="sidebar_img" src={img} />
        <div className="sidebar_contant">
          <img className="sidebar_my" src={my} />
          <div className="sidebar_imi">
            <div className="sidebar_name">Влад Альпин</div>
            <div className="sidebar_devoloper">front-end разработчик</div>
            <div className="sidebar_icon">
              <a className="sidebar_soc" target="_blank" href="https://wa.me/79147769814">
                <img src={wec} />
              </a>
              <a className="sidebar_soc" target="_blank" href="https://t.me/Vlad_Alpin">
                <img src={tg} />
              </a>
              <a className="sidebar_soc" onClick={() => setActiveGmail(true)}>
                <img src={gn}/>
              </a>
            </div>
            <div className="sidebar_mastab">
              <div className="sidebar_linear"></div>
            </div>

            <div className='sidebar_mobile'>
              <a href='/main' className='sidebar_a'>ГЛАВНАЯ</a>
              <a href='/about' className='sidebar_a'>ОБО МНЕ</a>
              <a href='/work' className='sidebar_a'>МОИ РАБОТЫ</a>
              {/* <a href='/articles' className='sidebar_a'>СТАТЬИ</a> */}
            </div>
            
            <div className="sidebar_anatation">
              Front-end разработчик. 
              <br/> Занимаюсь раазработкой сайтов разной сложности.
            </div>
            <div className="sidebar_mastab">
              <div className="sidebar_botton botton" onClick={() => setShow(true)}>Написать мне</div>
            </div>  
          </div>
        </div>
      </div>
      <ModalSoc onClose={() => setShow(false)} show={show}/>
      <ModalGmail active={activeGmail} setActive={setActiveGmail}/>
    </div>
  )
}

export default Sidebar;