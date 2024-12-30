import React from 'react';
import { Link } from 'react-scroll';

import '../index.css';  // Assuming you create a separate CSS file for Navbar-specific styles
import MouseCursor from '../MouseCursor';  // Import the MouseCursor component

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-[#071432] mt-[-10] text-white">
      {/* Sidebar */}
      <div className="w-full sm:w-2/5 p-6 sm:p-20 sticky top-0 h-screen flex flex-col justify-between">
        {/* Header at the Top */}
        <div className="flex flex-col items-center sm:items-start mb-10">
          <h1 className="text-3xl font-bold text-[#e0dfdf] mb-1 font-heading">Thapelo Boya</h1>
          <h3 className="text-xl font-medium text-[#d3cfd3] mb-3 font-heading">Intermediate Front-end Developer</h3>
          <div className="text-start text-[#d3cfd3] mb-3 font-body text-center sm:text-left">
            {/* Replaced <p> tag here */}
            Crafting seamless, responsive, and user-centric web experiences that leave a lasting impression.
          </div>
        </div>

        {/* Menu Links at the Center */}
        <div className="flex flex-col items-center sm:items-start justify-center flex-grow space-y-4 mb-20">
          <a href="#about"  className="text-m text-[#d3cfd3] relative flex items-center hover:text-[#1bffff] hover:text-x font-source-sans-pro"><span class="horizontal-line"></span> ABOUT</a>
          <a href="#experience" className="text-m text-[#d3cfd3] relative flex items-center hover:text-[#1bffff] hover:text-x font-source-sans-pro"><span class="horizontal-line"></span> EXPERIENCE</a>
          <a href="#projects" className="text-m text-[#d3cfd3] relative flex items-center hover:text-[#1bffff] hover:text-x font-source-sans-pro"><span class="horizontal-line"></span> PROJECTS</a>

        </div>

        {/* Social Media Links at the Bottom (Aligned to Left) */}
        <div className="flex flex-row items-center justify-start space-x-4 mt-auto sm:mt-0">
          <a
            href="https://github.com/ThapeloBoya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/Thapeloboya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto sm:p-20 h-screen flex flex-col justify-between">
        <section id="about" className="mt-4 text-[#d3cfd3] pb-20">
          <div className="text-m font-body pb-6">
            My journey into web development started in <strong>2019</strong> with a strong interest 
            in building things that are both functional and visually appealing.
            Over the past four years, I’ve honed my skills in front-end technologies 
            like React, Angular, Node.js, and PHP, along with connecting front-end 
            solutions to back-end APIs. I’ve had the opportunity to work on a variety 
            of exciting projects, developing responsive web applications that ensure 
            a seamless and engaging user experience.
          </div>
          <div className="text-m font-body pb-6">
            In addition to my technical skills, I’m a <strong>self-starter</strong>, adaptable, and 
            enjoy solving problems in creative ways. I thrive in environments where 
            design and engineering meet, and I’m always looking for opportunities to 
            innovate and improve my craft. Music plays a significant role in my work—
            whether it’s calming, motivating, or simply setting the right mood, I find 
            that music helps fuel my creativity and productivity.
          </div>
          <div className="text-m font-body pb-6">
            When I’m not coding, I’m usually rock climbing, spending time with my 
            family, or diving into personal projects. I’m always seeking new 
            opportunities to grow, collaborate, and continue creating impactful 
            digital solutions.
          </div>
        </section>

        <section id="experience" className="mt-4">
         
        <div className="flex font-body pt-4 job-container">
            <div className="w-1/5 text-xs"> <p>2022 - Present</p></div>
            <div className="w-4/5 text-xs">
            <h3 className="job-title">front-end developer, Gold media lab, woodmead</h3>
            <p className="pt-3">Developed responsive web applications with Angular, 
            optimizing load times by 20%. They worked with UX 
            designers to translate wireframes into functional 
            designs, conducted usability testing, and mentored 
            junior developers on best practices.</p>
            <div className="skills-container text-xs pt-2">
    <span className="skill-badge ">Angular</span>
    <span className="skill-badge">React</span>
    <span className="skill-badge">Adobe Photoshop</span>
    <span className="skill-badge">Tailwind</span>
    <span className="skill-badge">Adobe Illustrator</span>
    <span className="skill-badge">TypeScript</span>
    <span className="skill-badge">Azure</span>
  </div>
            </div>
        </div>
        <div className="flex font-body pt-4 job-container">
            <div className="w-1/5 text-xs"> <p>2021-2022</p></div>
            <div className="w-4/5 text-xs">
            <h3 className="job-title">front-end developer, natrose pure, sandton</h3>
            <p className="pt-3">Integrated user-centric features into web applications, 
                resulting in a 30% improvement in user engagement.
                    Conducted user research to understand client needs, 
                    applying insights to enhance overall usability.
                    Worked closely with product managers and designers to 
                    deliver cohesive design solutions.</p>
            <div className="skills-container text-xs pt-2">
    <span className="skill-badge ">Javascript</span>
    <span className="skill-badge">Adobe photoshop</span>
    <span className="skill-badge">Github</span>
    <span className="skill-badge">Node.js</span>
    <span className="skill-badge">Adobe Illustrator</span>
    <span className="skill-badge">Express.js</span>
    <span className="skill-badge">MongoDB</span>
  </div>
            </div>
        </div>
        <div className="flex font-body pt-4 job-container">
            <div className="w-1/5 text-xs"> <p>2020 - 2021</p></div>
            <div className="w-4/5 text-xs">
            <h3 className="job-title">Web Developer, WECODE, TEMBISA</h3>
            <p className="pt-3">Designed and deployed user-friendly websites, achieving a 
25% increase in user retention.Collaborated with 
cross-functional teams to ensure design consistency across 
projects.Conducted end-to-end testing, improving application 
reliability and reducing reported bugs by 20%.</p>
            <div className="skills-container text-xs pt-2">
    <span className="skill-badge ">Javascript</span>
    <span className="skill-badge">Adobe photoshop</span>
    <span className="skill-badge">Wordpress</span>
    <span className="skill-badge">Adobe illustrator</span>
    <span className="skill-badge">CSS</span>
    <span className="skill-badge">Adobe XD</span>
    <span className="skill-badge">PHP</span>
  </div>
            </div>
        </div>
        </section>

        <section id="projects" className="mt-4 pt-20">
        <div className="flex font-body project-container ">
    <div className="w-1/5 pr-5"> <img src="/Recipe-finder.png" alt="Recipe-finder" className="icon" /></div>
    <div className="w-4/5 text-xs">
    <h3 className="job-title">Recipe-finder (React)</h3>
    <p className="pt-3">A responsive Recipe Finder app built with React, allowing users to search for recipes based on the ingredients they have at home. The app interacts with the Spoonacular API to fetch and display recipe results, offering features like pagination, detailed instructions, and a dynamic user interface. This project demonstrates my skills in React, state management, and working with APIs..</p>
    <div className="skills-container text-xs pt-2">
<span className="skill-badge ">React</span>
<span className="skill-badge">React router</span>
<span className="skill-badge">Axios</span>
<span className="skill-badge">CSS</span>
<span className="skill-badge">GitHub</span>
<p className='line-link'><a href='https://recipe-finder-app-pink.vercel.app/'>Recipe Finder Live link</a></p>

</div>
    </div>
</div>
<div className="flex font-body pt-4 job-container">
<div className="w-1/5 pr-5"> <img src="/weather-app.png" alt="weather-app" className="icon" /></div>
    <div className="w-4/5 text-xs">
    <h3 className="job-title">Weather App</h3>
    <p className="pt-3">A responsive weather app built with React that allows users to get real-time weather information for any city. The app fetches data from the OpenWeatherMap API and displays the current weather conditions, including temperature, humidity, and weather description. Users can also view a 5-day forecast and switch between Celsius and Fahrenheit.</p>
    <div className="skills-container text-xs pt-2">
<span className="skill-badge ">React</span>
<span className="skill-badge">HTML</span>
<span className="skill-badge">CSS</span>
<span className="skill-badge">React Context</span>
<span className="skill-badge">Axios</span>
<span className="skill-badge">GitHub</span>
<p className='line-link'><a href='https://weather-app-74wr-l5htoe6pu-foxsugarprotonmes-projects.vercel.app/'>Weather App Live link</a></p>
</div>
    </div>
</div>
<div className="flex font-body pt-4 job-container">
<div className="w-1/5 pr-5"> <img src="/vehicle-tracking.png" alt="vehicle-tracking" className="icon" /></div>
    <div className="w-4/5 text-xs">
    <h3 className="job-title">Travel experience app</h3>
    <p className="pt-3">A vehicle tracking dashboard built with React and Leaflet, allowing users to visualize real-time vehicle locations on a map, view historical routes, and filter vehicles based on different criteria. The app fetches data from a backend API and uses Leaflet to display interactive maps with vehicle markers and routes.</p>
<a href=''>Live link</a>
    <div className="skills-container text-xs pt-2">
    <span className="skill-badge ">React</span>
<span className="skill-badge">Leaflet</span>
<span className="skill-badge">CSS</span>
<span className="skill-badge">Axios</span>
<span className="skill-badge">React Router</span>
<span className="skill-badge">GitHub</span>
<p className='line-link'><a href='https://vehicle-tracker-ob6vteyrl-foxsugarprotonmes-projects.vercel.app/'>Vehicle Tracking App Live link</a></p>
</div>
    </div>
</div>

        </section>

        <section id="projects" className="mt-4 pt-8">
          <div className="text-start text-[#d3cfd3] pt-8 mb-3 font-body text-center sm:text-left text-xs">
            Designed in <strong>Photoshop</strong>, coded in <strong>Visual Studio Code</strong>, built 
            with <string>React</string> and <strong>Tailwind CSS</strong>, and deployed on <strong>GitHub</strong>
          </div>
        </section>
      </div>

      {/* Add Mouse Cursor effect to Navbar */}
      <MouseCursor /> {/* Render the MouseCursor component */}
    </div>
  );
}
