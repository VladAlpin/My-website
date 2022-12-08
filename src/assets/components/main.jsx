import React from "react";
import Helmet from "react-helmet";
import tel from '../img/tel.png';
import tg from 'file:///C:/code/my/src/assets/img/icon/telegram-svgrepo-com.svg';
import active from '../img/works/activebox.webp';
import Mogo from '../img/works/mogo.webp';
import platform from '../img/works/platforms.webp';
import Port from '../img/works/portf.webp';

class Main extends React.Component {
  render() {
    return(
      <div className="alignment">
        <Helmet>
          <title>Главная</title>
        </Helmet>
        <div className="container">
          <div className="logo">Главная</div>

          {/* work */}
          <div className="work_item">
            <div className="icon im">
              <a href="http://websiteprof.ru/" target="_blank">
                <img className="img100" src={Mogo}/>
              </a>
              <div className="work_top">
                <a href='http://websiteprof.ru/' target="_blank" className="work_name">MoGo</a>
                {/* <div className="work_name">MoGo</div> */}
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

          {/*articles*/}
          {/* <div className="icon">
            <div className="articles_text">С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный </div>
          </div>

          <div className="icon im">
            <img className="img100" src={tel} />
            <div className="articles_name img">Как писать код быстро и безболезненно?</div>
            <div className="articles_text img">С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный </div>

            <div className="date">
              <div className="date_flex">
                <div className="date_numbers">15.02.2022</div>
                <div className="date_point"></div>
                <div className="date_punckt">создание сайтов</div>
              </div>

              <a href="#" className="date_next">ЧИТАТЬ</a>
            </div>
          </div> */}

          {/* about */}
          <div className='icon'>
              <div className='about_name'>Обо мне</div>
              <div className='about_text'>
                Занимаюсь Front-end разработкой сайтов.
                <br/>Делаю кроссплатформенную, адаптивную верстку сайтов, лендингов, и др., разной сложности. Подстраиваюсь под любой график работы, очень интересна разработка, умею гуглить, быстро находить информацию, и правильно ее использовать, в сфере программирование более полутора года, главное качество постоянное развитие.
                <br/>Есть комерческий опыт работы.
                <br/>Имею не оконченное высшее образование: КНАГУ, Социально Гуманитарный Факультет, Реклама и связь с общественностью.
                <br/>Мои работы, можно восмотреть в разделе "Мои работы".
              </div>
            </div>

            <div className='icon'>
              <div className='about_name'>Знание технологий</div>
              <div className='about_text'>
                ❯  JavaScript
                <br/>❯  React
                <br/>❯  WordPress
                <br/>❯  Gulp
                <br/>❯  Bootstrap
                <br/>❯  jQuery
                <br/>❯  Sass
                <br/>❯  SCSS
                <br/>❯  Less
                <br/>❯  Media queries
                <br/>❯  CSS 
                <br/>❯  HTML
                <br/> Так же графические редакторы: Adobe xd, Adobe Photoshop, Figma и д-р.
              </div>
            </div>

            <div className='icon'>
              <div className='about_name'>О сайте</div>
              <div className='about_text'>Данный сайт был разработан с помощью фреймворка React.js, с использыванием react-router-dom, для перехода на страницы, SCSS, SASS, с медиа запросами для подстраивание сайта, на мобильные устроиства(Media queries), используется SPA для быстродейтсвия.
                <br/> Сделан сайт для показа своих работ, как портфолио.
                <br/>
              </div>
            </div>

            {/* <div className='icon'>
              <div className='about_name'>Дизайн</div>
              <div className='about_text'>Дизайн сайта был разработан совместно с Голиковым Данилом.</div>
              <div className='about_soc'>
                <div className='about_text about_center'>+7-999-088-10-66</div>
                <a target="_blank" href="https://t.me/Den44eg">
                  <img className='about_padvinut' src={tg} />
                </a>
              </div>
            </div> */}

          <div className='page'>
            <div className='page_item'>
              <div className='page_num'>&lt;</div>
              <div className='page_num page_selected'>1</div>
              {/*<div className='page_num'>2</div>*/}
              <div className='page_num'>&gt;</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;