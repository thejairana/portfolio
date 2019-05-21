import React from 'react';
import './Website.css';

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

                {/* Experience Start */}
                <div className="about-page page-section">
                    <div className="heading">EXPERIENCE</div>
                    <div className="experience-container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="experience-card">
                                    {/* Header */}
                                    <div className="experience-header">
                                        <div className="row">
                                            <div className="col-12 experience-company">
                                                <span>Elogist Solutions</span>
                                                <span className="experience-position">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Body */}
                                    <div>
                                        <div>DEVELOP PRODUCT</div>
                                        <ul>
                                            <li>10 Mobile Apps (walle8, walle8 Parter, Walle8 Petrol Pump, Walle8 Cash Collect, Track App, Booster App, Booster Admin, Load Intelligence App, DOST App, Dost Partner)</li>
                                            <li>2 Plugins (Call logs Plugin, Location Plugin)</li>
                                            <li>Automation (Banking, App Testing)</li>
                                            <li>Dost Dashboard</li>
                                        </ul>
                                        <div>ACCOMPLISHMENTS</div>
                                        <ul>
                                            <li>Dramatically increased speed of Frontend development, Releasing one app per month.</li>
                                            <li>Trained 6 Members Team on Angular</li>
                                            <li>Trained 3 Members Team on Ionic</li>
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div>
                                        <div>Feb 2018 - Present | Jaipur, Rajasthan</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="experience-card">
                                    {/* Header */}
                                    <div className="experience-header">
                                        <div className="row">
                                            <div className="col-12 experience-company">
                                                <span>The RedWheel</span>
                                                <span className="experience-position">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Body */}
                                    <div>
                                        {/* <div>DEVELOP PRODUCT</div> */}
                                        <ul>
                                            <li>Provide Startup Solutions</li>
                                            <li>Worked on Mobile Apps, Web Apps, Backend</li>
                                        </ul>
                                        <div>ACCOMPLISHMENTS</div>
                                        <ul>
                                            <li>Developed A JavaScript Plugin Just in an hour</li>
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div>
                                        <div>July 2017 - Jan 2018 | Jaipur, Rajasthan</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="experience-card">
                                    {/* Header */}
                                    <div className="experience-header">
                                        <div className="row">
                                            <div className="col-12 experience-company">
                                                <span>Youstart</span>
                                                <span className="experience-position">Full Stack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Body */}
                                    <div>
                                        {/* <div>DEVELOP PRODUCT</div> */}
                                        <ul>
                                            <li>Worked on different apps</li>
                                            <li>Worked on Mobile Apps, Web Apps, Backend</li>
                                        </ul>
                                        <div>ACCOMPLISHMENTS</div>
                                        <ul>
                                            <li>Delived Sparup (2 Apps, 1 Dashboard) in 2 Months</li>
                                            <li>Created A Chat App As A Trainee in 5 Days. Which is used by Team internally for communication.</li>
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div>
                                        <div>Jan 2017 - June 2017s | Jaipur, Rajasthan</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Experience End */}

                {/* Projects Start */}
                <div className="page-section">
                    <div className="heading">PROJECTS</div>
                    <div className="section-info">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="project-card">
                                    <img src={require('../assets/projects/blogspire.jpg')} alt="pp" />
                                    <div className="project-details">
                                        <div className="project-name">
                                            <a href="https://andrewborstein.com/" target="_blank" rel="noopener noreferrer">BlogSpire</a>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </div>
                                        <div className="project-desc">Blogging web app created for the Engineering team at WeSpire.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="project-card">
                                    <img src={require('../assets/projects/blogspire.jpg')} alt="pp" />
                                    <div className="project-details">
                                        <div className="project-name">
                                            <a href="https://andrewborstein.com/" target="_blank" rel="noopener noreferrer">BlogSpire</a>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </div>
                                        <div className="project-desc">Blogging web app created for the Engineering team at WeSpire.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="project-card">
                                    <img src={require('../assets/projects/blogspire.jpg')} alt="pp" />
                                    <div className="project-details">
                                        <div className="project-name">
                                            <a href="https://andrewborstein.com/" target="_blank" rel="noopener noreferrer">BlogSpire</a>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </div>
                                        <div className="project-desc">Blogging web app created for the Engineering team at WeSpire.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="project-card">
                                    <img src={require('../assets/projects/blogspire.jpg')} alt="pp" />
                                    <div className="project-details">
                                        <div className="project-name">
                                            <a href="https://andrewborstein.com/" target="_blank" rel="noopener noreferrer">BlogSpire</a>
                                            <i className="fa fa-ellipsis-v"></i>
                                        </div>
                                        <div className="project-desc">Blogging web app created for the Engineering team at WeSpire.</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                {/* Projects End */}


                {/* Skills Start */}
                <div className="apage-section">
                    <div className="heading">SKILLS</div>
                    <div className="section-info">
                        <div className="skills-card">
                            <div className="skill">
                                <img src={require('../assets/skills/html5.png')} alt="html5" />
                                <span>HTML5</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/css3.svg')} alt="css3" />
                                <span>CSS3</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/js.png')} alt="js" />
                                <span>JavaScript</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/angular.png')} alt="angular" />
                                <span>Angular</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/ionic.png')} alt="ionic" />
                                <span>Ionic</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/react.png')} alt="react" />
                                <span>React</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/nodejs.png')} alt="nodejs" />
                                <span>NodeJS</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/mongo.png')} alt="mongo" />
                                <span>MongoDB</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/python.png')} alt="pyton" />
                                <span>Python</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/selenium.png')} alt="selenium" />
                                <span>Selenium</span>
                            </div>

                            <div className="skill">
                                <img src={require('../assets/skills/git.png')} alt="git" />
                                <span>GIT</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills End */}

                {/* Education Start */}
                <div className="apage-section">
                    <div className="heading">EDUCATION</div>
                    <div className="section-info">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="card education-card">
                                    <div className="college-name"><a href="http://www.jnit.org/" target="_blank" rel="noopener noreferrer">Jagannath Gupta Institute of Engineering & Technology (JNIT)</a></div>
                                    <div className="education-city">Jaipur, Rajasthan</div>
                                    <div className="education-info">
                                        <span className="education-course">B. Tech.</span> <span className="education-stream">Computer Science</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="card education-card">
                                    <div className="college-name">
                                        <a href="http://www.nielit.gov.in/" target="_blank" rel="noopener noreferrer">National Institute of Electronics & Information Technology (NIELIT)</a></div>
                                    <div className="education-city">Mthura, Uttar Pradesh</div>
                                    <div className="education-info">
                                        <span className="education-course">O & A Level</span> <span className="education-stream">Computer Science</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Education End */}

                {/* Contact Start */}
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
                {/* Contact End */}

            </div>
        </div>
    );

}

export default Website;
