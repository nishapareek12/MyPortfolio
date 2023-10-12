import React from 'react';
import  './works.css';
import portfolio1 from '../../assets/CLONE.png';
import portfolio2 from '../../assets/Explore.png';
import portfolio3 from '../../assets/Player App.png';
import portfolio4 from '../../assets/Bookstore.png';
import portfolio5 from '../../assets/Win.png';
import portfolio6 from '../../assets/ContactApplication.png';

const Works = () => {
  return (
    <section id="works">
     <h2 className="workstitle">MyPortfolio</h2>
     <span className="worksDesc">I works on prjects using React framework.I have also done some Machine Learning projects</span>
     <div className="worksImgs">
        <img src={portfolio1} alt="works" className="worksImg" />
        <img src={portfolio2} alt="works" className="worksImg" />
        <img src={portfolio3} alt="works" className="worksImg" />
        <img src={portfolio4} alt="works" className="worksImg" />
        <img src={portfolio5} alt="works" className="worksImg" />
        <img src={portfolio6} alt="works" className="worksImg" />
     </div>
     <button className="workBtn">See More</button>

    </section>
  )
}

export default Works;





