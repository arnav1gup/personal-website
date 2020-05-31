import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sectiontitle from "../components/Sectiontitle";
import Resume from "../components/Resume";
import Layout from "../components/Layout";

function Work(){

    const [workExperience, setWorkExperience] = useState([]);

    useEffect(() =>{
        axios.get('/api/experience')
            .then(response =>{
                setWorkExperience(response.data.workingExperience);
            })
    }, [])

    return(
        <Layout>
            <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
                <div className="container">
                    <Sectiontitle title="Past Work"/>
                    <div className="mi-resume-wrapper">
                        {workExperience.map(workingExp => (
                            <Resume key={workingExp.id} resumeData={workingExp} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Work;