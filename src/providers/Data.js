
const about = {
    oneline: 'Full Stack Web Developer Passionate About Coding. Always Ready To Learn New Things & Applying Them.',
    aboutMe: `I'm an innovative Full Stack Web Developer with 2.5 years of work experience developing many kinds of mobile & web applications.
    <br/>Recently I trained my team on Angular & Ionic within 3 weeks and getting 80% success. 
    I have developed products for more than 3 startups with 90% satisfaction.
    <br/>
    As a web developer I love my work and enjoy it. I always Learn new things & applied to these things into own work and also shared with others.
    I',m very aggressive web developer and always try to finish the job as quick as possible.<br/>
    So that's why I'm always excited to work with startups and make big impact on their growth.
    `,
    currentFocus: ['React'],
};


const experiences = [
    {
        company: 'Elogist Solutions',
        position: 'Full Stack Developer',
        about: `At Elogist, we are aggregating and providing services to small fleet owners operating in the open market.We want to place them at par with large fleet owners in terms of input costs, load tariffs and fleet management.`,
        duration: 'Feb 2018 - Present',
        location: 'Jaipur, Rajasthan',
        compnayLogo: 'assets/experience/elogist.jpg',
        details: [
            {
                name: 'DEVELOPED PRODUCTS',
                info: [
                    `Developed main product of Elogist "Walle8" and it's co-related products.`,
                    `Automation System To Reduce The Cost Of Support of Download Banking Data.`,
                    `Currenlty Managing A Large Scale Product With 14 Members Team`
                ]
            },
            {
                name: 'ACCOMPLISHMENTS',
                info: [
                    `Reduce Cost Of Support & Increase Efficiency`,
                    `Developed More Than 10 Mobile & Web Applications`,
                    `Trained All Team Over Angular & Ionic`
                ]
            }
        ]
    },
    {
        company: 'The RedWheel',
        position: 'Full Stack Developer',
        about: `The Redwheel was a service based company. It's provide web solutions to startups and small business owners. Like as mobile app development, web app development, website designs and other web solutions.`,
        duration: 'July 2017 - Jan 2018',
        location: 'Jaipur, Rajasthan',
        compnayLogo: 'assets/experience/theredwheel.png',
        details: [
            {
                name: 'DEVELOPED PRODUCTS',
                info: [
                    `Developed Mobile Apps for SeeADoc Startup`,
                    `QK Feedback Javascript Plugin`,
                    `Volkswagen Jaipur Service Booking System`
                ]
            },
            {
                name: 'ACCOMPLISHMENTS',
                info: [
                    `Developed Products For More Than 3 Startups`,
                    `Achiving 90% Client Satistication`,
                    `Delivered All Project On Deadline`
                ]
            }
        ]
    },
    {
        company: 'Youstart',
        position: 'Full Stack Developer',
        about: `Youstart Labs is an IIT-Delhi and BITS- Pilani alumni initiative to prepare today's engineers for future technologies and provide platform for making a great career in software industry.`,
        duration: 'Jan 2017 - June 2017',
        location: 'Jaipur, Rajasthan',
        compnayLogo: 'assets/experience/youstart.png',
        details: [
            {
                name: 'DEVELOPED PRODUCTS',
                info: [
                    `Sparup Athelets Training Management System`,
                    `MyLib Degital Libraray For Students`,
                    `Chat Application For Team Colloboration`
                ]
            },
            {
                name: 'ACCOMPLISHMENTS',
                info: [
                    `Get appreciation on first project from the client and Boss.`,
                    `Develop complete front end alone on first project.`,
                    `1st runner up on weekly code marathon in company.`
                ]
            }
        ]
    },
]

const projects = [
    {
        "name": "DOST",
        "type": "Web App",
        "company": "Elogist",
        "url": "http://elogist.in/testing/dost",
        "image": {
            "width": "200%",
            "height": "150%",
            "src": "assets/projects/dost-dashboard.png",
        },
        "technology": "Angular, CakePHP, PostgreSQL",
        "role": "Project Management",
        "teamMembers": "14",
        "description": `DOST (Digital Operations for Smart Transportation) is a platform for transport companies to manage all things on a single dashboard, 
        Such as accounting, trips, fuel, maintenance, documents, Live monitoring etc.`
    },
    {
        "name": "DOST",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/dost-app.png"
        },
        "technology": "Ionic 4, CakePHP, PostgreSQL",
        "role": "Team Leader",
        "teamMembers": "3",
        "description": `A mobile application for DOST customers to view reports on mobile.`
    },
    {
        "name": "Booster",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/booster.png",
        },
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application to provide boosters (drivers) for transport companies on demand`
    },
    {
        "name": "Booster Admin",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/booster-admin.png",
        },
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile app to manage booster services by support team.`
    },
    {
        "name": "Load Intelligence",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/load-intelligence.png",
        },
        "technology": "Ionic 3, CakePHP, PostgreSQL, Graphhopper, JAVA",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application to calculate total cost & profit of a trip, And suggest best route to get maximum profit.`
    },
    {
        "name": "Track",
        "type": "App",
        "company": "Elogist",
        "url": "https://play.google.com/store/apps/details?id=com.axes.axestrack&hl=en",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/track.webp"
        },
        "technology": "Ionic 3, .Net, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application for GPS Customers to view and track their vehicles.`
    },
    {
        "name": "Walle8",
        "type": "App",
        "company": "Elogist",
        "url": "https://play.google.com/store/apps/details?id=www.walle8.com",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/walle8.png"
        },
        "technology": "Ionic 2, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application to provide discount on fuel filling & toll tax.`
    },
    {
        "name": "Walle8 Partner",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/walle8-partner.png"
        },
        "technology": "Ionic 2, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application for Walle8 marketing team to add & manage customers.`
    },
    {
        "name": "Walle8 Petrol Pump",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/walle8-ro-app.png"
        },
        "technology": "Ionic 2, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application for petrol pump manager to recharge cards on behalf of customer.`
    },
    {
        "name": "Walle8 CCA",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/walle8-cca-app.png"
        },
        "technology": "Ionic 2, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A mobile application for walle8 agents to fill fuel in any lorry (truck) & provide discount.`
    },
    {
        "name": "App Testing",
        "type": "Automation",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/app-testing-automation.png"
        },
        "technology": "Python, Appium",
        "role": "Developer",
        "teamMembers": "2",
        "description": `Automation app testing system to test mobile app before release.`
    },
    {
        "name": "Banking",
        "type": "Automation",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/banking-automation.png"
        },
        "technology": "Python, Selenium, JavaScript",
        "role": "Developer",
        "teamMembers": "2",
        "description": `Automation system to download bank transactions and save transactions into DB.`
    },
    {
        "name": "Calllogs",
        "type": "Plugin",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/cordova-plugin.jpg",
        },
        "technology": "Java, JavaScript, Cordova",
        "role": "Javascript Development",
        "teamMembers": "2",
        "description": `A Cordova plugin to send call logs on every call received, missed, discard or dialed.`
    },
    {
        "name": "Location",
        "type": "Plugin",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/cordova-plugin.jpg"
        },
        "technology": "Java, JavaScript, Cordova",
        "role": "Javascript Development",
        "teamMembers": "2",
        "description": `A cordova plugin to send GPS & mobile tower location to server when app is in background.`
    },
    {
        "name": "Volkswagen Jaipur",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=com.sanghi.motrs",
        "image": {
            "width": "100%",
            "height": "210%",
            "src": "assets/projects/volkswagen-jaipur.webp"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": `Mobile application for Volkswagen Jaipur customers to book their services.`
    },
    {
        "name": "Volkswagen Jaipur",
        "type": "Web App",
        "company": "Redwheel",
        "url": "http://123.63.120.212:8091",
        "image": {
            "width": "140%",
            "height": "auto",
            "src": "assets/projects/volkswagen-jaipur-dashboard.png"
        },
        "technology": "Angular 6, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": `Web app fot Volkswagen Jaipur support team to manage request comes from app.`
    },
    {
        "name": "PeakOk",
        "type": "App",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "100%",
            "height": "180%",
            "src": "assets/projects/peakok.jpeg"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": `Mobile application to sale medical marijuana in USA.`
    },
    {
        "name": "PeakOk",
        "type": "Website",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/peak-ok-website.png"
        },
        "technology": "AJAX, NodeJS, ExpressJS, MongoDB, Php",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "2",
        "description": `Website of Peak dispensary to sale their products online.`
    },
    {
        "name": "PeakOk",
        "type": "Web App",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "200%",
            "height": "auto",
            "src": "assets/projects/peakok-web-app.png"
        },
        "technology": "Angular 6, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": `Web application to manage orders and dispensary items.`
    },
    {
        "name": "QKFeedback",
        "type": "Plugin",
        "company": "Redwheel",
        "url": "https://qkfeedback.com/",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/qkfeedback.png",
        },
        "imageHeight": "300px",
        "technology": "JavaScript",
        "role": "Frontend Development",
        "teamMembers": "1",
        "description": `Javascript plugin to take quick feedback from customer.`
    },
    {
        "name": "SeeADoc",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=io.ionic.starterseeadoc2018",
        "image": {
            "width": "100%",
            "height": "170%",
            "src": "assets/projects/see-a-doc-patient.webp"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "2",
        "description": `Mobile application to book doctors appointments.`
    },
    {
        "name": "SeeADoc Doctor",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=io.ionic.starterseeadocpro2018",
        "image": {
            "width": "100%",
            "height": "210%",
            "src": "assets/projects/see-a-doc-doctor.webp"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "2",
        "description": `Mobile application for doctors receptionist to manage bookings.`
    },
    {
        "name": "Victory India Holidays",
        "type": "Website",
        "company": "Redwheel",
        "url": "http://victoryindiaholidays.com/",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/victory-india.PNG"
        },
        "imageHeight": "300px",
        "technology": "HTML, CSS",
        "role": "Frontend Development",
        "teamMembers": "1",
        "description": `A website for travel agency to show their tour packages.`
    },
    {
        "name": "My JoyRide",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=com.myjoyrideapp",
        "image": {
            "width": "100%",
            "height": "310%",
            "src": "assets/projects/myjoyride.webp",
        },
        "technology": "Ionic 2, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": `Mobile application to provide shared taxi service.`
    },
    {
        "name": "GetShortCut",
        "type": "Web App",
        "company": "Redwheel",
        "url": "https://www.getshortcut.co/",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/get-short-cut.png"
        },
        "technology": "Angular 2",
        "role": "Code Optimization",
        "teamMembers": "1",
        "description": `A Web application to provide barbers on demand.`
    },

    {
        "name": "SparUp",
        "type": "App",
        "company": "Youstart",
        "url": "https://play.google.com/store/apps/details?id=com.youstart.sparup",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/sparup-player.webp"
        },
        "technology": "Ionic, NodeJS, MongoDB, ExpressJS",
        "role": "Frontend & Backend Development",
        "teamMembers": "2",
        "description": `A Mobile application for athletes and their parents to track daily activities.`
    },
    {
        "name": "SparUp Coach",
        "type": "App",
        "company": "Youstart",
        "url": "https://play.google.com/store/apps/details?id=com.youstart.sparupcoach",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/sparup-coach.webp"
        },
        "technology": "Ionic, NodeJS, MongoDB, ExpressJS",
        "role": "Frontend & Backend Development",
        "teamMembers": "2",
        "description": `A mobile application for coach & manager to assign and manage activities.`
    },
    {
        "name": "SparUp",
        "type": "Web App",
        "company": "Youstart",
        "url": "https://www.sparup.com/",
        "image": {
            "width": "150%",
            "height": "140%",
            "src": "assets/projects/sparup-dashboard.png"
        },
        "technology": "AngularJS, NodeJS, MongoDB, ExpressJS",
        "role": "Frontend & Backend Development",
        "teamMembers": "2",
        "description": `A Web app to assign, view & manage activities of athletes`
    },
    {
        "name": "MyLib",
        "type": "App",
        "company": "Youstart",
        "url": "https://play.google.com/store/apps/details?id=com.softbox.mylib&hl=en",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/mylib.webp"
        },
        "imageHeight": "100%",
        "technology": "Ionic 2, Loopback, MongoDB",
        "role": "Frontend & Backend Development",
        "teamMembers": "2",
        "description": `A digital library for children's with audio & video.`
    },
    {
        "name": "Quiz",
        "type": "Web App",
        "company": "Youstart",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": ""
        },
        "technology": "AngularJS, NodeJS, MongoDB, ExpressJS",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": `A Web application to add & manage quiz questions.`
    },



];

const skills = [
    {
        name: 'HTML5',
        img: 'assets/skills/html5.png'
    },
    {
        name: 'CSS3',
        img: 'assets/skills/css3.svg'
    },
    {
        name: 'JavaScript',
        img: 'assets/skills/js.png'
    },
    {
        name: 'Angular',
        img: 'assets/skills/angular.png'
    },
    {
        name: 'Ionic',
        img: 'assets/skills/ionic.png'
    },
    {
        name: 'React',
        img: 'assets/skills/react.png'
    },
    {
        name: 'NodeJS',
        img: 'assets/skills/nodejs.png'
    },
    {
        name: 'MongoDB',
        img: 'assets/skills/mongo.png'
    },
    {
        name: 'Python',
        img: 'assets/skills/python.png'
    },
    {
        name: 'Selenium',
        img: 'assets/skills/selenium.png'
    },
    {
        name: 'Git',
        img: 'assets/skills/git.png'
    },
]

const contacts = [
    { icon: 'fa fa-envelope', name: 'therana.jai@gmail.com' },
    { icon: 'fa fa-github', name: 'github.com/thejairana' },
    { icon: 'fa fa-github', name: 'thejairana.github.io/portfolio' },
    { icon: 'fa fa-linkedin', name: 'https://www.linkedin.com/in/jai-rana/' },
    { icon: 'fa fa-mobile', name: '+918385803337, +916378922131' }
]

module.exports = {
    about,
    projects,
    experiences,
    skills,
    contacts
};