import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import jQuery from  '../assets/jQuery.png';

const About = () => {
    return(
        <div className="About">
            <section className="profile">
                <div className="imgArea">
                    
                </div>
                <div className="intro">
                    <h1>이시온</h1>
                    <p>1998. 02. 12</p>
                    <p>안산대학교 식품영양과 졸업 후 방송통신대학교 식품영양학과를 졸업하였습니다.</p>
                </div>
            </section>
            <section className="career">
                <div className="boxWrap">
                    <h1>경력사항</h1>
                    <div className="box">
                        <ul>
                            <li>
                                <h2>(주) 텍트원 [2022.06 ~ 2024.04]</h2>
                            </li>
                            <li>
                                <h2>1. 스마트 팩토리 기반 웹페이지 및 태블릿, 모바일 퍼블리싱</h2>
                            </li>
                            <li>
                                <p> - HTML, CSS, jQuery를 이용한 화면 퍼블리싱</p>                                                             
                            </li>
                            <li>
                                <p> - 최신 CSS 문법을 사용하여 스크립트 최소화</p>
                            </li>
                            <li>
                                <p> - 반응형 웹사이트 및 크로스 브라우징 구현</p>
                            </li>
                            <li>
                                <p> - 차트 및 그래프 퍼블리싱</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>2. 기존 디자인을 반영한 새로운 페이지 디자인</h2>
                            </li>
                            <li>
                                <p> - 기존 디자인을 기반으로 한 새로운 화면 디자인</p>                                                             
                            </li>
                            <li>
                                <p> - 제공된 이미지를 활용하여 누끼 처리 및 간단한 도면 수정</p>
                            </li>
                        </ul>
                    </div>
                </div>             
            </section>
            <section className='skills'>
            <div className="boxWrap">
                    <h1>능력</h1>
                    <div className="box skillBox">
                        <ul>
                            <li>
                                <h2>편해요: </h2>                
                            </li>
                            <li>
                                <p>
                                    <span><FontAwesomeIcon icon={faHtml5} /></span> HTML
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faCss3Alt} /></span> CSS
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faJs} /></span> JAVASCRIPT
                                </p>
                                <p>
                                    <span style={{ background: `url(${jQuery}) no-repeat center/cover`, width:'18px', height: '18px', display: 'inline-block'}}></span>J-Query
                                </p>
                                <p>Svn</p>
                            </li>
                        </ul>
                    </div>
                    <div className='box skillBox'>
                        <ul>
                            <li>
                                <h2>어느 정도 사용 할 수 있어요:</h2>                   
                            </li>
                            <li>
                                <p>
                                    <span><FontAwesomeIcon icon={faReact} /></span>React
                                </p>
                                <p>
                                    <span><FontAwesomeIcon icon={faFigma} /></span>Figma
                                </p>
                                <p>
                                    Git
                                </p>                     
                            </li>
                        </ul>
                    </div>
                </div>  
            </section>
            <section className='interview'>
                <div className="boxWrap">
                    <h1>자문자답</h1>
                    <div className="box">
                        <h2>제 성격은요?</h2>
                        <p>항상 긍정적인 마인드로 도전을 두려워하지 않는 마음과 열정으로 목표를 향해 꾸준히 나아갑니다.</p>
                    </div>
                    <div className="box">
                        <h2>제가 되고 싶은 개발자는요?</h2>
                        <p>문제 해결에 관심을 가지고 끊임없이 성장하여 최신 기술을 습득하는 개발자가 되고 싶습니다.</p>
                        <p>또한 사용자에게 가치 있는 프로그램을 제공하며 팀과 협업하여 앞으로 나아가는 미래를 그리는 것이 목표입니다.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;