
const about = {
    oneline: 'Full Stack Web Developer Passionate About Coding. Always Ready To Learn New Things & Applying Them.',
    aboutMe: `I'm an innovative Full Stack Web Developer with 2.5 years of work experience developing many kinds of mobile & web applications.
    <br/>Recently I trained my team on Angular & Ionic within 3 weeks and getting 80% success. 
    I have developed products for more than 5 startups with 90% satisfaction.
    <br/>
    As a web developer I love my work and enjoy it. I Learn new things & applied to these things into own work and shared with others.
    I',m very aggressive web developer and always try to finish the job as quick as possible.<br/>
    So that's why I'm always excited to work with startups and make big impact on its growth.
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
        "role": "Trained Team on Angular, Frontend Support",
        "teamMembers": "8",
        "description": `DOST (Digital Operations for Smart Transportation) is a platform for transport companies to manage all things on a single dashboard, 
        Such as accounting, trips, fuel, maintenance, documents, Live monitoring etc. It is a complete package that transporters wants.`
    },
    {
        "name": "Dost",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/dost-app.png"
        },
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Project Management & Technical Support",
        "teamMembers": "3",
        "description": `It is mobile application for DOST (Digital Operations for Smart Transportation) users so they can view and manage all records on 
        mobile phone. It is developed in Ionic 4 and used a custom plugin for call logs read. Coll logs plugin read call history on every call and send 
        it to server.`
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
        "description": `A mobile application to provide drivers (Booster) for transport companies on demand. The main concept of this mobile application is 
        to cut the half time of transportation. For example a lorry will take 6 days from Gandhidham to Delhi, after using booster it takes only 2.5 or 3 days.`
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
        "description": `A mobile application for Elogist internal team to manage booster (Drivers) and trips. In this application support team assign 
        boosters to lorries (Trucks) and manage boosters availability. It was a revolutionary product of Elogist. it shut down because of high cost & 
        no funding raised.`
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
        "description": `It was another product of Elogist to suggest best route for truck. The main concept of this product was to get highest profit on a 
        trip (can be round trip). It calculate overall cost & profit of trip and suggest best route. It also suggest availability of load on routes.`
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
        "description": ``
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
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": "A Wallet System for Logistics to Take Discount On Fuel Fillings & Tolls."
    },
    {
        "name": "Walle8 Partner",
        "type": "App",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": ""
        },
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": "A Partner Application for Walle8 Marketing Team to Manage Customers."
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
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": "An Applications for Petrol Pump Owner To Recharge Cards On Behalf on Customer."
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
        "technology": "Ionic 3, CakePHP, PostgreSQL",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": "An Application For Walle8 Agents to Fill Fuel in Any Truck & Take Cash Directly And Give Some Discount To Truck Owner."
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
        "description": "Perform App Testing & Check All Test Cases."
    },
    {
        "name": "Banking",
        "type": "Automation",
        "company": "Elogist",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/banking-automation.png"
        },
        "technology": "Python, Selenium, JavaScript",
        "role": "Developer",
        "teamMembers": "2",
        "description": "Automation System To Download Bank Receipts & Upload Onto Own Server."
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
        "description": "A Cordova plugin to send call logs on every call received, missed, discard or dialed."
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
        "description": "Send Network Location To The Server in When App In Background."
    },
    {
        "name": "Volkswagen Jaipur",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=com.sanghi.motrs",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/volkswagen-jaipur.webp"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": "A mobile application for Volkswagen Customer to booking car service, test drive, buy insurance or to see new offers."
    },
    {
        "name": "Volkswagen Jaipur",
        "type": "Web App",
        "company": "Redwheel",
        "url": "http://123.63.120.212:8091",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/volkswagen-jaipur-dashboard.png"
        },
        "technology": "Angular 6, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": "A Dashboard to manage all request comes from mobile application"
    },
    {
        "name": "PeakOk",
        "type": "App",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/peakok.jpeg"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": "The Peak Dispensary began with one goal in mind: to help patients in Oklahoma find the medicinal marijuana that they needed in a safe, comfortable environment"
    },
    {
        "name": "PeakOk",
        "type": "Website",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": ""
        },
        "technology": "AJAX, NodeJS, ExpressJS, MongoDB, Php",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "2",
        "description": "A Website to sale marijuana."
    },
    {
        "name": "PeakOk",
        "type": "Web App",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/peakok.jpeg"
        },
        "technology": "Angular 6, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": "A Dashboard to manage orders of medicines."
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
        "description": "LIVE platform that allows feedback, grievance, survey, schemes & 2-way communication between public & specific government department using smart user interface."
    },
    {
        "name": "SeeADoc",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=io.ionic.starterseeadoc2018",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/see-a-doc-patient.webp"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "2",
        "description": "Worry No more, Your Health Companion SeeaDoc, helps you reach Doctors for Appointments from your mobile. SeeaDoc is scoped to transform the legacy doctor’s appointment booking system to NextGen digitised system "
    },
    {
        "name": "SeeADoc Doctor",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=io.ionic.starterseeadocpro2018",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/see-a-doc-doctor.webp"
        },
        "technology": "Ionic 3, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "2",
        "description": "A Application For Doctors to Control and Manage all your Appointment Bookings in fingertips."
    },
    {
        "name": "Victory India Holidays",
        "type": "Website",
        "company": "Redwheel",
        "url": "http://victoryindiaholidays.com/",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/victory-india.PNG"
        },
        "imageHeight": "300px",
        "technology": "HTML, CSS",
        "role": "Frontend Development",
        "teamMembers": "1",
        "description": "Victory India Holidays came into being in 2006 with a team of professionals to create a travel company of international standards. Today, Victory India Holidays is an established, premier travel management company catering to both corporate & leisure travellers"
    },
    {
        "name": "My JoyRide",
        "type": "App",
        "company": "Redwheel",
        "url": "https://play.google.com/store/apps/details?id=com.myjoyrideapp",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/myjoyride.webp",
        },
        "technology": "Ionic 2, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": "A Local Taxi Booking Application so any one can book a seat in a shared cab between two points."
    },
    {
        "name": "Event Management",
        "type": "Web App",
        "company": "Redwheel",
        "url": "",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": ""
        },
        "technology": "Angular 4, NodeJS, ExpressJS, MongoDB",
        "role": "Both Forntend & Backend Development",
        "teamMembers": "1",
        "description": "A Event Management System To Manage A Event & Ticket Bookings."
    },
    {
        "name": "GetShortCut",
        "type": "Web App",
        "company": "Redwheel",
        "url": "https://www.getshortcut.co/",
        "image": {
            "width": "100%",
            "height": "auto",
            "src": "assets/projects/getshortcut-2.png"
        },
        "technology": "Angular 2",
        "role": "Code Optimization",
        "teamMembers": "1",
        "description": "Shortcut is the easiest way to get a haircut on-demand, right in the comfort of your home or office. Our barbers and stylists offer premium services for men, women and kids."
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
        "technology": "Ionic 1, NodeJS, MongoDB, ExpressJS",
        "role": "Forntend Development",
        "teamMembers": "2",
        "description": "Sparup Player app enables players and parents to gain meaningful insights into performance data and allows continuous feedback from coaches. And Coach app enables coaches and managers to plan, track and analyze player progress and provide actionable feedback to players"
    },
    {
        "name": "SparUp Coach",
        "type": "App",
        "company": "Youstart",
        "url": "https://play.google.com/store/apps/details?id=com.youstart.sparupcoach",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/sparup-coach.webp"
        },
        "technology": "Ionic 1, NodeJS, MongoDB, ExpressJS",
        "role": "Forntend Development",
        "teamMembers": "2",
        "description": "This app enables coaches and managers to plan, track and analyze player progress and provide actionable feedback to players"
    },
    {
        "name": "SparUp",
        "type": "Web App",
        "company": "Youstart",
        "url": "https://www.sparup.com/",
        "image": {
            "width": "100%",
            "height": "100%",
            "src": "assets/projects/sparup-dashboard.png"
        },
        "technology": "AngularJS, NodeJS, MongoDB, ExpressJS",
        "role": "Forntend & Few Backend Development",
        "teamMembers": "2",
        "description": "SparUp is a global sports and fitness organization that leverages the power of sports science and data science to provide robust solutions to our clientele"
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
        "role": "Mainly Frontend, Some Part of Backend Development",
        "teamMembers": "2",
        "description": "MyLib is here to empower your child with amusing, simple, reliable and enjoyable learning. MyLib is available online OR offline, you can download your multimedia lessons and access them later when ready."
    },
    {
        "name": "Quiz",
        "type": "Web App",
        "company": "Youstart",
        "url": "",
        "image": {
            "width": "",
            "height": "",
            "src": ""
        },
        "technology": "Ionic 2, NodeJS, MongoDB, ExpressJS",
        "role": "Frontend Development",
        "teamMembers": "2",
        "description": "Quiz App Dashboard To Add & Update Quiz Question & Answers."
    },
    {
        "name": "Lawctopus*",
        "url": "",
        "company": "Redwheel",
        "image": {
            "width": "",
            "height": "",
            "src": ""
        },
        "technology": "Ionic 2, WP APIs",
        "role": "Forntend Development",
        "teamMembers": "1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
    },
    {
        "name": "Game Gold Coins Website*****",
        "url": "",
        "company": "Redwheel",
        "image": {
            "width": "",
            "height": "",
            "src": ""
        },
        "technology": "Angular",
        "role": "Frontend Development",
        "teamMembers": "1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
    },
    {
        "name": "NM Finance Loan Dashboard with AADHAR Verification*****",
        "url": "",
        "company": "Redwheel",
        "image": {
            "width": "",
            "height": "",
            "src": ""
        },
        "technology": "HTML, Ajax, NodeJS, AADHAR Api, Material",
        "role": "Both Frontend & Backend Development",
        "teamMembers": "1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi autem rerum natura perspecta erit, nullo modo poterimus sensuum iudicia defendere."
    }
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