import React from 'react';
import '../styles/Footer.scss';

const Footer = ({scrollUp}) => {
    return(
        <div className="footer">
            <div className="Rectangle-5">
                <div className="footer-content-up">
                <span className="dept-brand">DEPT</span>
                <ul className="footer-options">
                    <li className="footer-option">WORK</li>
                    <li className="footer-option">SERVICE</li>
                    <li className="footer-option">STORIES</li>
                    <li className="footer-option">ABOUT</li>
                    <li className="footer-option">CAREERS</li>
                    <li className="footer-option">CONTACT</li>
                </ul>
                <div className="social-media">
                    <a href="#" className="social-media-icon fa fa-facebook"></a>
                    <a href="#" className="social-media-icon fa fa-twitter"></a>
                    <a href="#" className="social-media-icon fa fa-instagram"></a>
                </div>
                </div>
                <div className="footer-content-down">
                    <span className="terms"><span>Chamber of Commerce: 63464101 &emsp;</span><span> VAT: NL 8552.47.502.B01&emsp;</span><span> Terms and conditions</span></span>
                    <span className="Dept-Agency-018">© 2018 Dept Agency</span>               
                </div>      
            </div> 
            <div className="top-scroller">
                <div className="scroller-btn" onClick={() => scrollUp()}>
                    <div className="triangle-up">
                    </div>
                    <div className="rectangle-up">
                    </div>
                    <div className="scroller-label">TOP</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;