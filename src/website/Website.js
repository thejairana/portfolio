import React from 'react';
import './Website.css';
import Project from './components/Project';
import Project2 from './components/Project2';

import dataService from '../providers/Data';

class Website extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMenu: '',
            projectsHTML: []
        };
        // this.generateHTML();
    }

    generateHTML() {
        let HTML = [];
        for (const [index, project] of dataService.projects.entries()) {
            HTML.push(<div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <Project name={project.name} desc={project.description} img={project.image || 'assets/projects/default.jpg'}
                    url={project.url} type={project.type} role={project.role} tech={project.technology} team={project.teamMembers} />
            </div>)
        }
        this.setState({ projectsHTML: HTML });
    }

    generateHTML2() {
        let HTML = [];
        for (const [index, project] of dataService.projects.entries()) {
            HTML.push(<div key={index} className="col-sm-12 col-md-4 col-lg-4">
                <Project2 name={project.name} desc={project.description} img={project.image || 'assets/projects/default.jpg'}
                    url={project.url} type={project.type} role={project.role} tech={project.technology} team={project.teamMembers} imageSize={project.imageHeight} />
            </div>)
        }
        this.setState({ projectsHTML: HTML });
    }



    componentWillMount() {
        this.generateHTML2();
    }

    onMenuClick(activeMenu) {
        console.log('activeMenu:', activeMenu);
        this.setState({ activeMenu: activeMenu });
    }

    handleScroll() {
        const ids = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i];
            let ele = document.getElementById(id);
            let rect = ele.getBoundingClientRect();
            if (rect.top <= 0 && (rect.height + rect.y - 100) > 0) {
                this.setState({ activeMenu: id });
            }
        }

    }

    render() {

        return (
            <div className="row main-row" onScroll={this.handleScroll.bind(this)}>
                <div className="col-xs-0 col-sm-0 col-md-2 left-side">
                    <div className="name-container">
                        <div className="my-name ">Jai Rana</div>
                        <div className="full-stack">Full Stack Developer</div>
                    </div>
                    <div className="sidebar">
                        <div className="side-menu active-side-menu">
                            <a href="#about" className={this.state.activeMenu === 'about' ? 'active' : ''} onClick={() => this.onMenuClick('about')}>
                                <i className="fa fa-user"></i> <span>About</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#experience" className={this.state.activeMenu === 'experience' ? 'active' : ''} onClick={() => this.onMenuClick('experience')}>
                                <i className="fa fa-signal"></i> <span>Experience</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#projects" className={this.state.activeMenu === 'projects' ? 'active' : ''} onClick={() => this.onMenuClick('projects')}>
                                <i className="fa fa-tasks"></i> <span>Projects</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#skills" className={this.state.activeMenu === 'skills' ? 'active' : ''} onClick={() => this.onMenuClick('skills')}>
                                <i className="fa fa-cogs"></i> <span>Skills</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="#education" className={this.state.activeMenu === 'education' ? 'active' : ''} onClick={() => this.onMenuClick('education')}>
                                <i className="fa fa-graduation-cap"></i> <span>Education</span>
                            </a>
                        </div>
                        <div className="side-menu" >
                            <a href="#contact" className={this.state.activeMenu === 'contact' ? 'active' : ''} onClick={() => this.onMenuClick('contact')}>
                                <i className="fa fa-envelope"></i> <span>Contact</span>
                            </a>
                        </div>
                        <div className="side-menu">
                            <a href="https://thejairana.github.io/resume/" className={this.state.activeMenu === 'resume' ? 'active' : ''} onClick={() => this.onMenuClick('resume')}>
                                <i className="fa fa-file"></i> <span>Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-10 right-side">
                    <div className="front-page">
                        <div className="font-page-layer">
                            <div className="front-content">
                                <div className="profile-img">
                                    <img src={require('../assets/contact/contact-image.png')} alt="The Jai Rana" />
                                </div>
                                <div className="front-line-1">The<span> Jai Rana</span></div>
                                <div className="front-line-2">I'm a <b>Full Stack Developer.</b></div>
                                {/* <div className="view-my-experience">
                                <span>View My Experience</span>
                                <i className="fa fa-arrow-down"></i>
                            </div> */}
                            </div>
                            <div className="arrow-down scrollto">
                                <a href="#about">
                                    <img src={require('../assets/arrow-down.png')} alt="arrow-down" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="about-page page-section" id="about">
                        <div className="heading">ABOUT</div>
                        <div className="about-container">
                            <div className="short-bio">{dataService.about.oneline}</div>
                            <div className="about-myself" >
                                <p dangerouslySetInnerHTML={{ __html: dataService.about.aboutMe }}></p>
                            </div>
                            <div className="current-focus">
                                <strong>Current Focus:</strong>
                                {dataService.about.currentFocus.map((focus, i) => <span key={i}>{focus}</span>)}
                            </div>
                        </div>
                    </div>

                    {/* Experience Start */}
                    <div className="about-page page-section" id="experience">
                        <div className="heading">EXPERIENCE</div>
                        <div className="experience-container">
                            <div className="row">
                                {dataService.experiences.map((experience, index) => {
                                    return (
                                        <div className="col-12" key={index}>
                                            <div className="experience-card">
                                                <div className="row">
                                                    <div className={'col-sm-12 col-md-4' + (index % 2 === 0 ? ' order-12' : '')}>
                                                        <img src={require('../' + experience.compnayLogo)} alt="elogist" />
                                                    </div>
                                                    <div className="col-sm-12 col-md-8">
                                                        <div className="ex-card">
                                                            {/* Header */}
                                                            <div className="experience-header">
                                                                <div className="row">
                                                                    <div className="col-12 experience-company">
                                                                        <span>{experience.company}</span>
                                                                        <span className="experience-position">{experience.position}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Body */}
                                                            <div className="ex-body">
                                                                <div className="ex-about">{experience.about}</div>
                                                                {experience.details.map((detail, dIndex) => {
                                                                    return (
                                                                        <div key={dIndex} className="ex-details-container">
                                                                            <div className="ex-detail-heading ">{detail.name}</div>
                                                                            <ul className="ex-details">
                                                                                {detail.info.map((info, key) => {
                                                                                    return (<li key={key}>{info}</li>)
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>

                                                            {/* Footer */}
                                                            <div className="ex-footer">
                                                                <div><span>{experience.duration}</span> <span>|</span> <span>{experience.location}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>

                        </div>

                    </div>

                    {/* Experience End */}

                    {/* Projects Start */}
                    <div className="page-section" id="projects">
                        <div className="heading">PROJECTS</div>
                        <div className="section-info">
                            <div className="row">
                                {this.state.projectsHTML}
                            </div>
                        </div>
                    </div>
                    {/* Projects End */}


                    {/* Skills Start */}
                    <div className="apage-section" id="skills">
                        <div className="heading">SKILLS</div>
                        <div className="section-info">
                            <div className="row">
                                {dataService.skills.map((skill, index) => {
                                    return (
                                        <div className="col-sm-12 col-md-3 col-lg-3 F1-skill-container" key={index}>
                                            <div className="F1-skill">
                                                <img src={require('../' + skill.img)} alt={skill.name} />
                                                <span>{skill.name}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Skills End */}

                    {/* Education Start */}
                    <div className="apage-section" id="education">
                        <div className="heading">EDUCATION</div>
                        <div className="section-info ">

                            <div className="row F1-edu-container">
                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img className="F1-edu-img" src={require('../assets/education/jnit.png')} alt="jnit" />
                                </div>
                                <div className="col-sm-12 col-md-8 col-lg-8">
                                    <div className="F1-edu-card">
                                        <div className="F1-edu-card-header"><a href="http://www.jnit.org/" target="_blank" rel="noopener noreferrer">Jagannath Gupta Institute of Engineering & Technology (JNIT)</a></div>
                                        <div className="F1-edu-cart-content">
                                            <div className="">
                                                <i className="fa fa-graduation-cap"></i>
                                                <span>B. Tech.</span>
                                            </div>
                                            <div>
                                                <i className="fa fa-book"></i>
                                                <span>Computer Science</span>
                                            </div>
                                            <div className="F1-edu-city">
                                                <i className="fa fa-map-marker"></i>
                                                <span>Jaipur, Rajasthan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row F1-edu-container">
                                <div className="col-sm-12 col-md-8 col-lg-8">
                                    <div className="F1-edu-card">
                                        <div className="F1-edu-card-header">
                                            <a href="http://www.nielit.gov.in/" target="_blank" rel="noopener noreferrer">National Institute of Electronics & Information Technology (NIELIT)</a>
                                        </div>
                                        <div className="F1-edu-cart-content">
                                            <div className="">
                                                <i className="fa fa-graduation-cap"></i>
                                                <span>O & A Level</span>
                                            </div>
                                            <div>
                                                <i className="fa fa-book"></i>
                                                <span>Computer Science</span>
                                            </div>
                                            <div className="F1-edu-city">
                                                <i className="fa fa-map-marker"></i>
                                                <span>Mathura, Uttar Pradesh</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-4 col-lg-4">
                                    <img className="F1-edu-img" src={require('../assets/education/nielit.jpg')} alt="nielit" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Education End */}

                    {/* Contact Start */}
                    <div className="apage-section" id="contact">
                        <div className="heading">CONTACT</div>
                        <div className="section-info">
                            <div className="contact-info">
                                <i className="fa fa-envelope"></i> <a href="mailto:therana.jai@gmail.com">therana.jai@gmail.com</a>
                            </div>

                            <div className="contact-info">
                                <i className="fa fa-github"></i> <a href="https://github.com/jkrana008">github.com/thejairana</a>
                            </div>

                            <div className="contact-info">
                                <i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/jai-rana/">linkedin.com/in/jai-rana/</a>
                            </div>

                            <div className="contact-info">
                                <i className="fa fa-mobile"></i> <a href="tel:+918385803337">+918385803337</a>, <a href="tel:+916378922131">+916378922131</a>
                            </div>

                        </div>
                    </div>
                    {/* Contact End */}

                </div>
            </div>
        );
    }

}

export default Website;
