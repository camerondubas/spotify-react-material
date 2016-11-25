import React from 'react';
import { connect } from 'react-redux';
import PictureThumbnail from './PictureThumbnail';
import LightboxContainer from '../lightbox/Lightbox';
import GalleryMessage from './GalleryMessage';

import { fetchPictures, selectPicture } from './picture.actions';

@connect(store => ({
  pictures: store.pictures
}))
export default class PictureGallery extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPictures());
  }

  handleClick(idx) {
    this.props.dispatch(selectPicture(idx));
  }

  render() {
    let message = null;
    let pictures = this.props.pictures;
    let selectedPicture = pictures.pictures[pictures.selectedIdx];

    window.onscroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100 && !pictures.fetching) {
        this.props.dispatch(fetchPictures({page: pictures.pages + 1}))
      }
    };

    message = pictures.fetching && 'Loading pictures...';
    message = pictures.error &&'Error Fetching images, please reload';

    return (
      <div className="c-picture-gallery">
        {pictures.pictures.map((picture, idx) => <PictureThumbnail onClick={this.handleClick.bind(this, idx)} src={picture.webformatURL} alt={picture.tags} key={idx}/>)}
        {message && <GalleryMessage message={message} /> }
        {selectedPicture && <LightboxContainer />}
      </div>
    );
  }
};