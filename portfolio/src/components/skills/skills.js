import React from 'react';
import './skills.css';
import react from '../../assets/reactskill.png';
import node from '../../assets/nodeskill.png';
import dbase from '../../assets/MongoDB.png';

const Skills = () => {
  return (
    <section id='skills'>
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">
    With a deep understanding of the web development stack, I excel in creating dynamic and responsive web applications that not only look great but also deliver seamless user experiences.</span>
    <div className="skillsBars">
        <div className="skillsBar">
            <img src={react} alt="ui" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React JS</h2>
                <p>I have strong proficiency in React.js, with experience in building responsive and dynamic web applications using modern front-end development practices.</p>
            </div>
        </div>
        <div className="skillsBar">
            <img src={node} alt="web" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Node JS </h2>
                <p>I have a foundational understanding of Node.js and am eager to further develop my skills in server-side JavaScript development.</p>
            </div>
        </div>
        <div className="skillsBar">
            <img src={dbase} alt="app" className="skillBarImg" />
            <div className="skillBarText">
                <h2>MongoDB / MySQL</h2>
                <p>I have a basic understanding of database management using MongoDB and MySQL and I'm keen to expand my knowledge and experience in database development.</p>
            </div>
        </div>
    </div>

    </section>
  )
}

export default Skills;