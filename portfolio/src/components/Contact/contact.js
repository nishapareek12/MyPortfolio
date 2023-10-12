import React,{useRef} from 'react';
import './contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
import githubIcon from '../../assets/github-icon.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9pbc5xh', 'template_tmh6cye', form.current, 'haXYSGbojn8AG3aa3')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
    {/* <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies 
          so of notable companies i have worked includes
        </p>
        <div className="clientImgs">
            <img src={Walmart} alt="w" className="clientImg" />
            <img src={Adobe} alt="a" className="clientImg" />
            <img src={Microsoft} alt="m" className="clientImg" />
            <img src={Facebook} alt="f" className="clientImg" />
        </div>
    </div> */}
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">please  fill out the form below to discuss any 
        job opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name"  placeholder='Your Name' name='from_name'/>
          <input type="text" className="email" placeholder='Your Email' name='from_email'/>
          <textarea name="message"  rows="5" className="msg" placeholder='Your Message'></textarea>
           <button type='submit' value='Send' className="submitBtn">Submit</button>
           <div className="links">
               <a href='https://github.com/nishapareek12'><img src={githubIcon} alt="face" className="link" /></a>
               <a href=''><img src={twitterIcon} alt="twi" className="link" /></a>
               <a href='https://www.linkedin.com/in/nisha-pareek12/'><img src={linkedinIcon} alt="you" className="link" /></a>
               <a href=''><img src={instagramIcon} alt="insta" className="link" /></a>
           </div>
        </form>
    </div>

    </section>
  )
}

export default Contact