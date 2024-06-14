import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from "react-copy-to-clipboard";

const toastMsg = () => {
    const msg = document.querySelector('.Toastify');

    msg.style.display = "block"
    setTimeout(function(){
        msg.style.display = "none";
    }, 2000)
}

const Contact = () => {
    return(
        <div className="Contact">
            <div className='title'>CONTACT</div>
            <div className='contact_wrap'>
                <div className="wrap">
                    <div className="logo">
                        <FontAwesomeIcon icon={faGithub} size='3x'/>
                        <h1>GitHub :</h1>
                    </div>
                    <h2>S2SIONS2</h2>
                </div>
                <div className='wrap'>
                    <div className='logo'>
                        <FontAwesomeIcon icon={faPhone} size='3x'/>
                        <h1>Phone :</h1>
                    </div>
                    <h2>010-2371-1933</h2>
                </div>
                <div className='wrap'>
                    <div className='logo'>
                        <FontAwesomeIcon icon={faEnvelope} size='3x' />
                        <h1>E-mail :</h1>
                    </div>
                    <h2>chasio100@naver.com</h2>
                    <CopyToClipboard text="chasio100@naver.com">
                        <button onClick={toastMsg}>복사하기</button>
                    </CopyToClipboard>
                    <div className='Toastify'>
                        클립보드에 복사되었습니다.
                    </div>
                </div>
                <div className='wrap'>
                    <div className='logo'>
                        <FontAwesomeIcon icon={faBlog} size='3x'/>
                        <h1>Blog: </h1>
                    </div>
                    <h2>https://deer-develope-diary.tistory.com/</h2>
                </div>
            </div>       
        </div>
    )
}

export default Contact;
