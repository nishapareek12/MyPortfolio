import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import{Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
    <span className='hello'>Hello</span>
    <span className='introText'>I'm <span className="introName">Nisha</span><br/>Website Developer</span>
    <p className='introPara'>I am a skilled developer who loves creating <br/>user friendly websites</p>
    <Link><button className="btn"><img src={btnImg } alt="hireme"  className='btnImg'/>Hire me</button></Link>
    </div>
    <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro;