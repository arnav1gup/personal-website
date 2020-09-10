import React from 'react';
import DevIcon from "devicon-react-svg";
import styled from "styled-components";
import IconCplusplus from 'react-devicon/cplusplus/line';
import something from './something';


function Skill(props){
    const devIconStyle = {
        fill: "#ff2503",
        width: "40px",
        display: "inline-block",
        marginBottom: "20px",
        marginRight: "10px"
    };
    const myStyle = {
      fontSize: "40px",
      color: "#ff2503",
      display: "inline-block",
      marginBottom: "20px",
      marginRight: "10px"
    }
  console.log(props)
  console.log(props.content.icons)
  return (
    <div className="mi-service">
        <div>
       {Object.values(props.content.icons).map(function(object){
            return <i style={myStyle} class={object}></i>
            {/*<DevIcon key={object} icon={object} style={devIconStyle}/>*/}
        })}
        </div>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Skill;
