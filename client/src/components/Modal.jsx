import React from 'react';
import DevIcon from "devicon-react-svg";
import styled from "styled-components";

function ModalTemp(props){

  const myStyle = {
    fontSize: "40px",
    color: "#ff2503",
    display: "inline-block",
    marginBottom: "20px",
    marginRight: "10px"
  }

  return (
    <div className="mi-service">
        <div>
        {Object.values(props.content.icons).map(function(object){
            return <i style={myStyle} class={object}></i>
        })}
        </div>
      <h5 className="something2">{props.content.title}</h5>
      <h6>Technologies: {props.content.technologies}</h6>
      <p>{props.content.subtitle}</p>
    </div>
  )
}

export default ModalTemp;