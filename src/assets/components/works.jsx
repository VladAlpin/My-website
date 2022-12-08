import React from "react";
import platform from '../img/works/platforms.webp';
import { Helmet } from "react-helmet";
import active from '../img/works/activebox.webp';
import Slider from "./slider";
import Mogo from '../img/works/mogo.webp';
import Port from '../img/works/portf.webp';

class Works extends React.Component {
  render() {

    return(
      <div className="alignment">
        <Helmet>
          <title>Работы</title>
        </Helmet>
        <div className="container">
          <div className="logo">Мои работы</div>

          {/*<Slider/>*/}

          {/*Mogo*/}
          <div className="work_item">
            <div className="icon im">
              <a href="http://websiteprof.ru/" target="_blank">
                <img className="img100" src={Mogo}/>
              </a>
              <div className="work_top">
                <a href='http://websiteprof.ru/' target="_blank" className="work_name">MoGo</a>
                 {/*<div className="work_name">MoGo</div>*/}
              </div>
              <div className="work_text img">Лендинг сделанный только с помощью HTML, CSS, JQuery, без всего лишнего, с медиа запросами, для подстройки сайта под мобильные устройства
              <br/> Один из первых сделанный мной сайтов.
              </div>
              
              <div className="mark">
                <div className="mark_icon">HTML</div>
                <div className="mark_icon">CSS</div>
                <div className="mark_icon">JQuery</div>
              </div>

              <div className="work_but">
                <a href="http://websiteprof.ru/" target="_blank" className="work_next botton">Перейти на сайт</a>
              </div>
            </div>
          </div>

          {/*ActiveBox*/}
          <div className="work_item">
            <div className="icon im">
              {/* <a href="http://websiteprof.ru/" target="_blank"> */}
                <img className="img100" src={active}/>
              {/* </a> */}
              <div className="work_top">
                {/* <a href='http://websiteprof.ru/' target="_blank" className="work_name">ACTIVEBOX</a> */}
                <div className="work_name">ACTIVEBOX</div>
              </div>
              <div className="work_text img">Лендинг сделанный только с помощью HTML, CSS, JQuery, без всего лишнего, с медиа запросами, для подстройки сайта под мобильные устройства 
              <br/> Один из первых сделанный мной сайтов.
              </div>
              
              <div className="mark">
                <div className="mark_icon">HTML</div>
                <div className="mark_icon">CSS</div>
                <div className="mark_icon">JQuery</div>
              </div>

              <div className="work_but">
                {/* <a href="http://websiteprof.ru/" target="_blank" className="work_next botton">Перейти на сайт</a> */}
              </div>
            </div>
          </div>

          {/*Platforms*/}
          <div className="work_item">
            <div className="icon im">
              {/* <a href="" target="_blank"> */}
                <img className="img100" src={platform}/>
              {/* </a> */}
              <div className="work_top">
                {/* <a href='' target="_blank" className="work_name">MoGo</a> */}
                <div className="work_name">Platforms</div>
              </div>
              <div className="work_text img">Лендинг сделанный только с помощью HTML, CSS, JavaScript, без использования JQuery, с медиа запросами, для подстройки сайта под мобильные устройства.
              </div>
              
              <div className="mark">
                <div className="mark_icon">HTML</div>
                <div className="mark_icon">CSS</div>
                <div className="mark_icon">JavaScript</div>
              </div>

              <div className="work_but">
                {/* <a href="http://websiteprof.ru/" target="_blank" className="work_next botton">Перейти на сайт</a> */}
              </div>
            </div>
          </div>

          {/*Portfolio*/}
          <div className="work_item">
            <div className="icon im">
              {/* <a href="" target="_blank"> */}
                <img className="img100" src={Port}/>
              {/* </a> */}
              <div className="work_top">
                {/* <a href='' target="_blank" className="work_name">MoGo</a> */}
                <div className="work_name">Portfolio</div>
              </div>
              <div className="work_text img">Первая попытка создать сайт портфолио с помощью HTML, CSS, JavaScript, без использования JQuery, с медиа запросами, для подстройки сайта под мобильные устройства.
              </div>
              
              <div className="mark">
                <div className="mark_icon">HTML</div>
                <div className="mark_icon">CSS</div>
                <div className="mark_icon">JavaScript</div>
              </div>

              <div className="work_but">
                {/* <a href="http://websiteprof.ru/" target="_blank" className="work_next botton">Перейти на сайт</a> */}
              </div>
            </div>
          </div>

          <div className='icon'>
            <div className='about_name'>Данный сайт</div>
            <div className='about_text'>Данный сайт был разработан с помощью фреймворка React.js, с использыванием react-router-dom, для перехода на страницы, SCSS, SASS, с медиа запросами для подстраивание сайта, на мобильные устроиства(Media queries), используется SPA для быстродейтсвия.
            <br/> Сделан сайт для показа своих работ, как портфолио.
            <br/> 
            </div>
          </div>
      </div>

        {/*Количество страниц*/}
        <div className='page'>
          <div className='page_item'>
            <div className='page_num'>&lt;</div>
            <div className='page_num page_selected'>1</div>
            <div className='page_num'>&gt;</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Works; 