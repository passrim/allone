import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './../assets/css/styles/modules.css';
import Header from './../Header';
import Footer from './../Footer';

const UIPDA1001 = () => { 
  return (
    <>
      {/* <!-- #wrap --> */}
      <div id="wrap">
        <Header />
        <div id="container">
            <div className="content" data-role="content">
              <section className="with-fixedBtn">
                <div style={{width:'100%',height:'900px',background:'#ddd'}}></div>
              </section>
              <ul className="columnSet selfBottom">
                <li className="colItem"><button type="button" className="btn primary submit layerOpenBtnSample">팝업 열기</button></li>
              </ul>
            </div>
          </div>
          <Footer />
      </div>
      {/* <!-- //#wrap --> */}

      {/* <!-- fullPopup --> */}
      <div className="modalWrap" id="modalFull" style={{display:'block'}}>
        <div className="modalFull tutorialPop">
          <div className="header">
            <button type="button" className="btn closeBtn" id="fullClose">닫기</button>
          </div>
          <div className="modal-contents" data-role="content">
            <div className="swiper-container tutorial-Slider">
            <Swiper
              // install Swiper modules
              modules={[Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              className="swiper-container-horizontal"
              //onSwiper={(swiper) => console.log(swiper)}
              //onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="tutorialText">
                  <img src="../img/tutorial/tutorial_text01.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                </div>
                <div className="tutorialContent">
                  <img src="../img/tutorial/tutorial_content01.png" alt="올원뱅크 메인 화면" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tutorialText">
                  <img src="../img/tutorial/tutorial_text02.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                </div>
                <div className="tutorialContent">
                  <ul className="slidesAnimation">
                    <li className="ani1"><img src="../img/tutorial/tutorial_content02.gif" alt="올원뱅크 메인 화면" /></li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tutorialText">
                  <img src="../img/tutorial/tutorial_text03.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                </div>
                <div className="tutorialContent">
                  <ul className="slidesAnimation">
                    <li className="ani1"><img src="../img/tutorial/tutorial_content03.gif" alt="올원뱅크 메인 화면" /></li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tutorialText">
                  <img src="../img/tutorial/tutorial_text04.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                </div>
                <div className="tutorialContent">
                  <ul className="slidesAnimation">
                    <li className="ani1"><img src="../img/tutorial/tutorial_content04.gif" alt="올원뱅크 메인 화면" /></li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tutorialText">
                  <img src="../img/tutorial/tutorial_text05.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                </div>
                <div className="tutorialContent">
                  <ul className="slidesAnimation">
                    <li className="ani1"><img src="../img/tutorial/tutorial_content05.gif" alt="올원뱅크 메인 화면" /></li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tutorialText">
                  <img src="../img/tutorial/tutorial_text06.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                </div>
                <div className="tutorialContent">
                  <ul className="slidesAnimation">
                    <li className="ani1"><img src="../img/tutorial/tutorial_content06.gif" alt="올원뱅크 메인 화면" /></li>
                  </ul>
                </div>								
                <ul className="columnSet selfBottom">
                  <li className="colItem"><button type="submit" className="btn primary submit">시작하기</button></li>
                </ul>
              </SwiperSlide>
            </Swiper>
              {/* <div className="swiper-wrapper">
                <!-- Slides -->
                <div className="swiper-slide">
                  <div className="tutorialText">
                    <img src="../../assets/img/tutorial/tutorial_text01.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                  </div>
                  <div className="tutorialContent">
                    <img src="../../assets/img/tutorial/tutorial_content01.png" alt="올원뱅크 메인 화면" />
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <div className="tutorialText">
                    <img src="../../assets/img/tutorial/tutorial_text02.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                  </div>
                  <div className="tutorialContent">
                    <ul className="slidesAnimation">
                      <li className="ani1"><img src="../../assets/img/tutorial/tutorial_content02.gif" alt="올원뱅크 메인 화면" /></li>
                    </ul>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tutorialText">
                    <img src="../../assets/img/tutorial/tutorial_text03.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                  </div>
                  <div className="tutorialContent">
                    <ul className="slidesAnimation">
                      <li className="ani1"><img src="../../assets/img/tutorial/tutorial_content03.gif" alt="올원뱅크 메인 화면" /></li>
                    </ul>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tutorialText">
                    <img src="../../assets/img/tutorial/tutorial_text04.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                  </div>
                  <div className="tutorialContent">
                    <ul className="slidesAnimation">
                      <li className="ani1"><img src="../../assets/img/tutorial/tutorial_content04.gif" alt="올원뱅크 메인 화면" /></li>
                    </ul>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tutorialText">
                    <img src="../../assets/img/tutorial/tutorial_text05.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                  </div>
                  <div className="tutorialContent">
                    <ul className="slidesAnimation">
                      <li className="ani1"><img src="../../assets/img/tutorial/tutorial_content05.gif" alt="올원뱅크 메인 화면" /></li>
                    </ul>
                  </div>
                </div>

                <div className="swiper-slide SliderLast">
                  <div className="tutorialText">
                    <img src="../../assets/img/tutorial/tutorial_text06.png" alt="24시간!365일!잠들지 않는 올원뱅크 #새로운서비스 #새로운기능 #새로운 상품 새롭게 바뀐 올원뱅크 어떻게 달라졌을까요?"/>
                  </div>
                  <div className="tutorialContent">
                    <ul className="slidesAnimation">
                      <li className="ani1"><img src="../../assets/img/tutorial/tutorial_content06.gif" alt="올원뱅크 메인 화면" /></li>
                    </ul>
                  </div>								
                  <ul className="columnSet selfBottom">
                    <li className="colItem"><button type="submit" className="btn primary submit">시작하기</button></li>
                  </ul>
                </div>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next tutorial-next"></div>	
              <div className="swiper-button-prev tutorial-prev"></div>	 */}
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- //fullPopup --> */}
    </>
  );
  
}



export default UIPDA1001;
