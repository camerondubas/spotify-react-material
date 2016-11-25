import React from 'react';

let PictureThumbnail = props => (
  <div className="c-picture-thumbnail" onClick={props.onClick}>
    <img src={props.src} alt={props.alt} />
  </div>
);

export default PictureThumbnail;