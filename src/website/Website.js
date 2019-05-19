import React from 'react';
import './Website.css';
const logo = require('../assets/experience/walle8.png'); // with require

function Website() {
    return (
        <div className="row main-row">
            <div className="col-2 left-side">
                <div className="name-container">
                    <div className="my-name ">Jai Rana</div>
                    <div className="full-stack">Full Stack Developer</div>
                </div>
                <div className="sidebar">
                    <div>
                        <i className="fa fa-user"></i> <span>About</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Experience</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Projects</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Skills</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Awards</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Education</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Contact</span>
                    </div>
                    <div>
                        <i className="fa fa-user"></i> <span>Resume</span>
                    </div>
                </div>
            </div>
            <div className="col-10 right-side">
                <div className="front-page">
                    <div className="font-page-layer">
                        <div className="front-content">
                            <div className="front-line-1">Hello, I'm <span>Jai Rana</span>.</div>
                            <div className="front-line-2">I'm a full stack web developer.</div>
                            <div className="view-my-experience">
                                <span>View My Experience</span>
                                <i className="fa fa-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-page page-section">
                    <div className="heading">ABOUT</div>
                    <div clssname="sort-bio">Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.</div>
                    <div>
                        <p>I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion to help others and solve problems.</p>
                        <p>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.</p>
                    </div>
                    <div><strong>Current Focus:</strong> Accessibility // React // Design Systems</div>
                </div>

                <div className="about-page page-section">
                    <div className="heading">EXPERIENCE</div>
                    <div>
                        {/* Header */}
                        <div>
                            <div className="row">
                                <div className="col-2">
                                    <img src={logo} />
                                </div>
                                <div className="col-4">Elogist</div>
                                <di className="col-6">Full Stack Developer</di>
                            </div>
                        </div>
                        {/* Body */}
                        <div>
                            <p>SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</p>
                            <div>DEVELOP PRODUCT</div>
                            <ul>
                                <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                                <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                                <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                                <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                            </ul>
                            <div>ACCOMPLISHMENTS</div>
                            <ul>
                                <li>Dramatically increased speed of UI development using atomic, scalable CSS</li>
                                <li>Dramatically increased speed of UI development using atomic, scalable CSS</li>
                            </ul>
                        </div>

                        {/* Footer */}
                        <div>
                            <div>Jan 2016 - Present | Boston, MA</div>
                        </div>
                    </div>

                </div>

                <div className="apage-section">
                    <div className="heading">CONTACT</div>
                    <div className="section-info">
                        <div className="contact-info">
                            <i className="fa fa-envelope"></i> <a href="mailto:jkrana008@gmail.com">jkrana008@gmail.com</a>
                        </div>

                        <div className="contact-info">
                            <i className="fa fa-github"></i> <a href="https://github.com/jkrana008">github.com/jkrana008</a>
                        </div>

                        <div className="contact-info">
                            <i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/jai-rana/">linkedin.com/in/jai-rana/</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Website;
