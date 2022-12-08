import React from "react";
import tel from '../img/tel.png';
import { Helmet } from "react-helmet";

class Articles extends React.Component {
  render() {
    return(
      <div className="alignment">
        <Helmet>
          <title>Статьи</title>
        </Helmet>
        <div className="container">
          <div className="logo">Статьи</div>

          <div className="articles_item">
            <div className="icon">
              <div className="articles_text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>

            {/* показынно с помощью какого класса ставить статьи с изображениями */}
            {/* <div className="icon im">
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

export default Articles;