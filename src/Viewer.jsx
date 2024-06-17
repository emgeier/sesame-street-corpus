import React, { useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';

const Viewer = ({ images }) => {

    return (
        <PhotoProvider>
          <div className="foo">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img src={item} alt="" />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      );
}

export default Viewer;
