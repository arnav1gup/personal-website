import React from 'react';
import DevIcon from "devicon-react-svg";
import styled from "styled-components";

function Skill(props){

    const devIconStyle = {
        fill: "#ff2503",
        width: "40px",
        display: "inline-block",
        marginBottom: "20px",
        marginRight: "10px"
    };

  return (
    <div className="mi-service">
        <div>
        {Object.values(props.content.icons).map(function(object){
            return <DevIcon icon={object} style={devIconStyle}/>;
        })}
        </div>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Skill;
