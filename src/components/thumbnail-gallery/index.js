import React, { Component } from 'react';
import ActiveThumbnailWindow from './active-thumbnail-window';
import ThumbnailGrid from './thumbnail-grid';

export default class ThumbnailGallery extends Component {
  render() {
    return (
      <div style={thumbnailGalleryStyles}>

        {/* Lefty */}
      <div style={{ flex: 1}}>
        <ActiveThumbnailWindow/>
        <ThumbnailGrid />
      </div>
        {/* Righty */}
      <div style={{ flex: 1, padding: '40px' }}>
        some cool text
      </div>

      </div>
    )
  }
}

const thumbnailGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: ' 40px auto',
    display: 'flex'
}