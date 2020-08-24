import React, { useState } from "react";
import * as Icon from "react-feather";
import FsLightbox from "fslightbox-react";
import Modal from 'react-awesome-modal';

function Project(props) {
  const [toggler, setToggler] = useState(false);
  const {title, subtitle, imageUrl, largeImageUrl, url} = props.content;
  const [visible, setVisible] = useState(false);
  
  const handleToggler = (value) => {
    setToggler(value);
  }

  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
}
  return (
    <div className={props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"}>
      <div className="mi-portfolio-image">
        <img src={imageUrl} alt={title} />
        <ul>
          { url ? <li>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <Icon.Link/>
            </a>
          </li> : null}
        </ul>
      </div>
      {!url ? <h5>{title}</h5> : <h5>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {title}
        </a>
      </h5>}
      <b></b>
      <a href="javascript:void(0);" onClick={()=>openModal()} className="mi-readmore">Description</a>
      <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={()=>this.closeModal()}>
            <div>
              <p>{subtitle}</p>
              <a href="javascript:void(0);" onClick={()=>closeModal()}>Close</a>
            </div>

      </Modal>
      {/*{subtitle ? <h6>{subtitle}</h6> : null}*/}
      {!largeImageUrl ? null : <FsLightbox
        toggler={toggler}
        sources={largeImageUrl}
        />
      }
    </div>
  );
}

export default Project;
