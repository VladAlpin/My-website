import React from "react";
import tg from 'file:///C:/code/my/src/assets/img/icon/telegram-svgrepo-com.svg';
import { Helmet } from "react-helmet";

class About extends React.Component {
  render() {
    return(
      <div className='alignment'>
        <Helmet>
          <title>Информация</title>
        </Helmet>
        <div className='container'>
          <div className='logo'>Обо мне</div>
          <div className='about_item'>

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
            
          </div>
        </div>

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

export default About;