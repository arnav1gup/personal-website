import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sectiontitle from "../components/Sectiontitle";
import Resume from "../components/Resume";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import ProjectsView from "../components/ProjectsView";

function Projects() {
  const [portfolios, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [portfoliosPerPage] = useState(9);

  useEffect(() => {
    axios.get('/api/portfolios')
      .then( response => {
        setPortfoios(response.data);
      })
  }, [portfolios]);

  useEffect(() =>{
    axios.get('/api/experience')
        .then(response =>{
          setWorkingExperience(response.data.workingExperience);
        })
  }, [])

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(indexOfFirstPortfolios, indexOfLastPortfolios);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  return (
    <Layout>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Projects" />
          <ProjectsView portfolios={currentPortfolios}/>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
