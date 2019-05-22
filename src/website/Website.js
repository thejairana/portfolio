import React from 'react';
import './Website.css';
import Project from './components/Project';

function Website() {
    const projects = [
        {
            "name": "DOST",
            "type": "Web App",
            "url": "http://elogist.in/testing/dost",
            "image": "assets/projects/dost-dashboard.png",
            "technology": "Angular, CakePHP, PostgreSQL",
            "role": "Project Management & Technical Support",
            "teamMembers": "8",
            "description": "A Digital Operations for Smart Transportation (DOST) System Web App"
        },
        {
            "name": "Dost",
            "type": "App",
            "url": "",
            "image": "assets/projects/dost-app.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Project Management & Technical Support",
            "teamMembers": "3",
            "description": "A Digital Operations for Smart Transportation (DOST) System Mobile App."
        },
        {
            "name": "Booster",
            "type": "App",
            "url": "",
            "image": "assets/projects/booster.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "An Instant Diver Provider Application for Trucks"
        },
        {
            "name": "Booster Admin",
            "type": "App",
            "url": "",
            "image": "assets/projects/booster-admin.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "Application to Manage Driver & Trip Details of Trucks."
        },
        {
            "name": "Load Intelligence",
            "type": "App",
            "url": "",
            "image": "assets/projects/load-intelligence.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL, Graphhopper, JAVA",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "An Intelliget System for Logistics Owners To CalCulate Their Profit & Cost."
        },
        {
            "name": "Track",
            "type": "App",
            "url": "",
            "image": "assets/projects/track.webp",
            "technology": "Ionic 3, .Net, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "A Mobile Applications for Axestrack Customers to Track Their Vehicles."
        },
        {
            "name": "Walle8",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=www.walle8.com",
            "image": "assets/projects/walle8.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "A Wallet System for Logistics to Take Discount On Fuel Fillings & Tolls."
        },
        {
            "name": "Walle8 Partner",
            "type": "App",
            "url": "",
            "image": "",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "A Partner Application for Walle8 Marketing Team to Manage Customers."
        },
        {
            "name": "Walle8 Petrol Pump",
            "type": "App",
            "url": "",
            "image": "assets/projects/walle8-ro-app.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "An Applications for Petrol Pump Owner To Recharge Cards On Behalf on Customer."
        },
        {
            "name": "Walle8 CCA",
            "type": "App",
            "url": "",
            "image": "assets/projects/walle8-cca-app.png",
            "technology": "Ionic 3, CakePHP, PostgreSQL",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "An Application For Walle8 Agents to Fill Fuel in Any Truck & Take Cash Directly And Give Some Discount To Truck Owner."
        },
        {
            "name": "App Testing",
            "type": "Automation",
            "url": "",
            "image": "assets/projects/app-testing-automation.png",
            "technology": "Python, Appium",
            "role": "Developer",
            "teamMembers": "2",
            "description": "Perform App Testing & Check All Test Cases."
        },
        {
            "name": "Banking",
            "type": "Automation",
            "url": "",
            "image": "assets/projects/banking-automation.png",
            "technology": "Python, Selenium, JavaScript",
            "role": "Developer",
            "teamMembers": "2",
            "description": "Automation System To Download Bank Receipts & Upload Onto Own Server."
        },
        {
            "name": "Calllogs",
            "type": "Plugin",
            "url": "",
            "image": "assets/projects/cordova-plugin.jpg",
            "technology": "Java, JavaScript, Cordova",
            "role": "Javascript Development",
            "teamMembers": "2",
            "description": "A Cordova plugin to send call logs on every call received, missed, discard or dialed."
        },
        {
            "name": "Location",
            "type": "Plugin",
            "url": "",
            "image": "assets/projects/cordova-plugin.jpg",
            "technology": "Java, JavaScript, Cordova",
            "role": "Javascript Development",
            "teamMembers": "2",
            "description": "Send Network Location To The Server in When App In Background."
        },
        {
            "name": "Volkswagen Jaipur",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=com.sanghi.motrs",
            "image": "assets/projects/volkswagen-jaipur.webp",
            "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "1",
            "description": "A Service Booking, Test Drive, Insurance Bookinh Application"
        },
        {
            "name": "Volkswagen Jaipur",
            "type": "Web App",
            "url": "http://123.63.120.212:8091",
            "image": "assets/projects/volkswagen-jaipur-dashboard.png",
            "technology": "Angular 6, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "1",
            "description": "A Dashboard to manage all request comes from mobile application"
        },
        {
            "name": "PeakOk",
            "type": "App",
            "url": "",
            "image": "",
            "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "1",
            "description": "A mobile application to sale marijuana."
        },
        {
            "name": "PeakOk",
            "type": "Website",
            "url": "",
            "image": "",
            "technology": "AJAX, NodeJS, ExpressJS, MongoDB, Php",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "2",
            "description": "A Website to sale marijuana."
        },
        {
            "name": "PeakOk",
            "type": "Web App",
            "url": "",
            "image": "",
            "technology": "Angular 6, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "1",
            "description": "A Dashboard to manage orders of medicines."
        },
        {
            "name": "QKFeedback",
            "type": "Plugin",
            "url": "https://qkfeedback.com/",
            "image": "assets/projects/qkfeedback.png",
            "technology": "JavaScript",
            "role": "Frontend Development",
            "teamMembers": "1",
            "description": "A Quick Feedback Javascript Plugin which integrate in any webiste by javascript link."
        },
        {
            "name": "SeeADoc",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=io.ionic.starterseeadoc2018",
            "image": "assets/projects/see-a-doc-patient.webp",
            "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "2",
            "description": "SeeaDoc is scoped to transform the legacy doctor’s appointment booking system to NextGen digitised system "
        },
        {
            "name": "SeeADoc Doctor",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=io.ionic.starterseeadocpro2018",
            "image": "assets/projects/see-a-doc-doctor.webp",
            "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "2",
            "description": "A Application For Doctors to Control and Manage all your Appointment Bookings in fingertips."
        },
        {
            "name": "Victory India Holidays",
            "type": "Website",
            "url": "http://victoryindiaholidays.com/",
            "image": "",
            "technology": "HTML, CSS",
            "role": "Frontend Development",
            "teamMembers": "1",
            "description": "A Travel Agency Website Having Tour Packages & Other Travel Details."
        },
        {
            "name": "My JoyRide",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=com.myjoyrideapp",
            "image": "assets/projects/myjoyride.webp",
            "technology": "Ionic 2, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "1",
            "description": "A Local Taxi Booking Application."
        },
        {
            "name": "Event Management",
            "type": "Web App",
            "url": "",
            "image": "",
            "technology": "Angular 4, NodeJS, ExpressJS, MongoDB",
            "role": "Both Forntend & Backend Development",
            "teamMembers": "1",
            "description": "A Event Management System To Manage A Event & Ticket Bookings."
        },
        {
            "name": "GetShortCut",
            "type": "Web App",
            "url": "https://www.getshortcut.co/",
            "image": "assets/projects/getshortcut.png",
            "technology": "Angular 2",
            "role": "Code Optimization",
            "teamMembers": "1",
            "description": "GetShortCut send the best local barbers & hair stylists directly to Clients Door."
        },

        {
            "name": "SparUp",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=com.youstart.sparup",
            "image": "assets/projects/sparup-player.webp",
            "technology": "Ionic 1, NodeJS, MongoDB, ExpressJS",
            "role": "Forntend Development",
            "teamMembers": "2",
            "description": "This app enables players and parents to gain meaningful insights into performance data and allows continuous feedback from coaches"
        },
        {
            "name": "SparUp Coach",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=com.youstart.sparupcoach",
            "image": "assets/projects/sparup-coach.webp",
            "technology": "Ionic 1, NodeJS, MongoDB, ExpressJS",
            "role": "Forntend Development",
            "teamMembers": "2",
            "description": "This app enables coaches and managers to plan, track and analyze player progress and provide actionable feedback to players"
        },
        {
            "name": "SparUp",
            "type": "Web App",
            "url": "https://www.sparup.com/",
            "image": "assets/projects/sparup-dashboard.png",
            "technology": "AngularJS, NodeJS, MongoDB, ExpressJS",
            "role": "Forntend & Few Backend Development",
            "teamMembers": "2",
            "description": "SparUp is a global sports and fitness organization that leverages the power of sports science and data science to provide robust solutions to our clientele"
        },
        {
            "name": "MyLib",
            "type": "App",
            "url": "https://play.google.com/store/apps/details?id=com.softbox.mylib&hl=en",
            "image": "assets/projects/mylib.webp",
            "technology": "Ionic 2, Loopback, MongoDB",
            "role": "Mainly Frontend, Some Part of Backend Development",
            "teamMembers": "2",
            "description": "A Online/Offline Libraray App For Children's To Learn Things Quick & Fast."
        },
        {
            "name": "Quiz",
            "type": "Web App",
            "url": "",
            "image": "",
            "technology": "Ionic 2, NodeJS, MongoDB, ExpressJS",
            "role": "Frontend Development",
            "teamMembers": "2",
            "description": "Quiz App Dashboard To Add & Update Quiz Question & Answers."
        },
        // {
        //     "name": "Lawctopus*",
        //     "url": "",
        //     "image": "",
        //     "technology": "Ionic 2, WP APIs",
        //     "role": "Forntend Development",
        //     "teamMembers": "1",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
        // },
        // {
        //     "name": "Game Gold Coins Website*****",
        //     "url": "",
        //     "image": "",
        //     "technology": "Angular",
        //     "role": "Frontend Development",
        //     "teamMembers": "1",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
        // },
        // {
        //     "name": "NM Finance Loan Dashboard with AADHAR Verification*****",
        //     "url": "",
        //     "image": "",
        //     "technology": "HTML, Ajax, NodeJS, AADHAR Api, Material",
        //     "role": "Both Frontend & Backend Development",
        //     "teamMembers": "1",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
        // },
        // {
        //     "name": "Chat Application With Firebase",
        //     "url": "",
        //     "image": "",
        //     "technology": "Ionic 1, Firebase",
        //     "role": "Both Frontend & Backend Development",
        //     "teamMembers": "1",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
        // },

    ];
    let projectsHTML = [];
    for (const [index, project] of projects.entries()) {
        projectsHTML.push(<div key={index} className="col-sm-12 col-md-4 col-lg-4">
            <Project name={project.name} desc={project.description} img={project.image || 'assets/projects/default.jpg'}
                url={project.url} type={project.type} role={project.role} tech={project.technology} team={project.teamMembers} />
        </div>)
    }
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
                            {projectsHTML}
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
