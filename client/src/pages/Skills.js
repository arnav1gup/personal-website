import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Skill from "../components/Skill.jsx";

function Skills(){
  const [services, setServices, serviceIcons, setServiceIcons] = useState([]);

  useEffect( () => {
    axios.get('/api/services')
        .then(response =>{
          setServices(response.data)
        })
  });


  return (
    <Layout>
      <div className="mi-service-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Skills" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                  <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.title}>
                    <Skill content={service}/>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Skills;
