import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="resume" id="resume">

        <div className="resume-header">
          <div className="name">Rishav Srivastava</div>
          <div className="bio">Machine Learning Engineer and Front-End Developer | Data Science and Machine Learning Enthusiast.</div>
          <div className="desrciption">
            I am a Front-End Developer and Machine Learning with over all 1 year experience in Hirecraft Technology Private Limited. I have a good
            command over Machine Learning Algorithm, NLP, JavaScript, AngularJS, Angular 6, Ionic, Python, Flask-API, Firebase.
          </div>
        </div>

        <div className="personal-details">
          <div className="row">
            <div className="col-6">
              <i className="fa fa-envelope"></i> <span>rishav.jnit@gmail.com</span>
            </div>
            <div className="col-6">
              <i className="fa fa-mobile"></i> <span>+918385803337</span>
            </div>
            <div className="col-6">
              <i className="fa fa-calendar"></i> <span>15 Aug 1993</span>
            </div>
            <div className="col-6">
              <i className="fa fa-globe"></i> <span>http://thejairana.me</span>
            </div>
            <div className="col-6">
              <i className="fa fa-linkedin"></i> <span>https://www.linkedin.com/in/jai-rana/</span>
            </div>
            <div className="col-6">
              <i className="fa fa-github"></i> <span>https://github.com/thejaiarana</span>
            </div>
          </div>
        </div>

        <div className="professional-details">
          <div className="row">
            {/* Part 1 */}
            <div className="col-6 side-1">

              <div className="section">
                <div className="heading">Work Experience</div>
                <div className="position">Associate Software Engineer</div>
                <div className="company">Hirecraft Technology Private Limited.</div>
                <div className="row working-time">
                  <div className="col-6">03/2018 - present</div>
                  <div className="col-6">Banglore</div>
                </div>
                <div className="achievements">Achievements/Tasks</div>
                <div>
                  <ul className="achievements-list">
                    <li>Trained 20 intern and 3 fresher on AngularJS and Angular 6 Framework</li>
                    <li>Web Developer and Debugger</li>
                    <li>Worked on Machine learning to find predictive score based on job title for ICICI Bank</li>
                  </ul>
                </div>
              </div>

              <div className="section">
                <div className="heading">Education</div>
                <div className="sub-section">
                  <div className="position">B. Tech.</div>
                  <div className="company">JNIT, Jaipur</div>
                  <div className="row working-time">
                    <div className="col-6">06/2013 - 05/2017</div>
                    <div className="col-6">Jaipur</div>
                  </div>
                  <div className="achievements">Computer Science</div>
                  <div>
                    <ul className="achievements-list">
                      <li>Participated in ISRO Science Exhibition</li>
                      <li>Percentage - 68%</li>
                      <li>Participated in many extra-</li>
                    </ul>
                  </div>
                </div>

                <div className="sub-section">
                  <div className="position">12th</div>
                  <div className="company">RP Inter College</div>
                  <div className="row working-time">
                    <div className="col-6">06/2013 - 05/2017</div>
                    <div className="col-6">Jaipur</div>
                  </div>
                </div>

                <div className="sub-section">
                  <div className="position">10th</div>
                  <div className="company">RP Inter College</div>
                  <div className="row working-time">
                    <div className="col-6">06/2013 - 05/2017</div>
                    <div className="col-6">Jaipur</div>
                  </div>
                </div>

              </div>

            </div>
            {/* Part 2 */}
            <div className="col-6 side-2">
              <div className="section">
                <div className="heading">SKILLS</div>
                <div className="skills">
                  <span>Machine Leanring</span>
                  <span>NLP</span>
                  <span>Angular</span>
                  <span>Ionic</span>
                  <span>Python</span>
                  <span>Flask API</span>
                  <span>Firebase</span>
                  <span>JavaScript</span>
                  <span>GIT</span>
                </div>
              </div>

              <div className="section">
                <div className="heading">Projects</div>
                <div className="project">
                  <div className="project-name">DreamCareer (Based on Angular 2 and Ionic 2) (08/2017 – 09/2017)</div>
                  <div className="project-desc">DreamCareer provides ChatBot which helps student to know their goals. We organise Quiz Contest where latest
                    Computer based questions are available. It also provides latest updated news and informations about new technologies.
                  </div>
                </div>


                <div className="project">
                  <div className="project-name">Resume Parsing (Based on NLP,Python,Spacy) (06/2018 – 07/2018)</div>
                  <div className="project-desc">Resume parsing application helps you to get all data from your resume Like- Name,Skill,Experience etc.
                  </div>
                </div>

                <div className="project">
                  <div className="project-name">Predictive Score Finder (Based on Python,Flask-API) (11/2018 – 11/2018)</div>
                  <div className="project-desc">Predictive score application helps you to find best candidate for
                  </div>
                </div>

                <div className="project">
                  <div className="project-name">Mini Project (Based on HTML,CSS,BootStrap,JavaScript,AngualrJs,Angular6) (03/2017 – Present)</div>
                  <div className="project-desc">Todo List,ChatApp,Tic Tac game, ChatBot...etc
                  </div>
                </div>

              </div>

              <div className="section">
                <div className="heading">CERTIFICATES</div>
                <div className="certificate">
                  <div className="certification">NPTEL Certificate in Programming, Data Structures and Algorithm using Python (04/2018 – Present)</div>
                </div>
                <div className="certificate">
                  <div className="certification">FreeCodeCamp's JavaScript Algorithms and Data Structures (12/2018 – Present)</div>
                </div>
                <div className="certificate">
                  <div className="certification">ACEH(Appin Certified ethical hacker) (02/2012 – Present)</div>
                  <div className="certification-desc">Six months course of ethical hacking</div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
