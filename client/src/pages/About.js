import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Skill from '../components/Skill';

function About(){
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  useEffect(() =>{
    axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  I am a 19 year old, current second year university student currently pursuing a double degree
                  in Computer Science and Business Administration from the University of Waterloo and Wilfrid Laurier
                  university. While currently studying in Canada, I am originally from India but have spent half of life living in Japan
                  and the other half living in Singapore so you can say I'm a typical third culture kid! I love anything and everything to do
                  with money and tech and am always eager to learn more.
                </p>
                <a href={information.cvfile} className="mi-readmore">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="What I Do" />
          <div className="mi-service-wrapper">
            <p>Perhaps a better question would be, what I don't! I am a Student, an iOS App Developer, a Full Stack Web Developer, a Web Designer, 
              a CEO, an avid investor, a public speaker, a freelancer and much much more. 
              Check out my website to see all the work I have done in the past, to read my blog and to contact me for any work or business oppurtunities!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
