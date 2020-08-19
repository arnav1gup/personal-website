import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import Typist from "react-typist";

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  //this fills the information area
  const [count, setCount] = useState(1);

  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, [])

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  HI, I AM <span className="color-theme">Arnav Gupta</span> </h1>
                <h1>
                    <span className="color-theme">{count ? (
                    <Typist avgTypingDelay={150} onTypingDone={() => setCount(0)}>
                      <span>A Developer.</span>
                      <Typist.Delay ms={1500} />
                      <Typist.Backspace count={10} />
                      <span>&nbsp;Designer.</span>
                      <Typist.Delay ms={1500} />
                      <Typist.Backspace count={10} />
                      <span>&nbsp;Creator.</span>
                      <Typist.Delay ms={1500} />
                      <Typist.Backspace count={15} />
                    </Typist>
                ): (
                    ""
                )}</span>
                </h1>
                {<p>{information.aboutContent}</p>}
                <a href={information.cvfile} className="mi-button">Download CV</a>
                <Socialicons bordered />

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
