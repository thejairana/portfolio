import React from 'react';
import './contact.scss';
function Contact() {
    return (
        <div className="contact-1">
            <div className="frame">
                <div className="picture"></div>
                <div className="social twitter">
                    <a href="https://twitter.com/tamer_aka_remat" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>

                <div className="social linkedin">
                    <a href="https://www.linkedin.com/in/amtamer/?locale=en_US" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>

                <div className="social codepen">
                    <a href="https://codepen.io/tamer_aka_remat/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                </div>

                <div className="social mail">
                    <a href="mailto:therana.jai@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Contact;
