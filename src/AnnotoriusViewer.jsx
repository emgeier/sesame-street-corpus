import React, { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import { Annotorious } from '@recogito/annotorious';
import '@recogito/annotorious-openseadragon'; // Import Annotorious integration with OpenSeadragon

const AnnotoriousViewer = ({ imageUrl }) => {
  console.log(imageUrl);
  const viewerRef = useRef(null);
  const annoRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = OpenSeadragon({
        element: viewerRef.current,
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: {
          type: 'image',
          url: imageUrl,
        },
      });

      annoRef.current = new Annotorious(viewer);

      // Add any additional Annotorious configuration here

      return () => {
        if (annoRef.current) {
          annoRef.current.destroy();
        }
        if (viewer) {
          viewer.destroy();
        }
      };
    }
  }, [imageUrl]);

  return (
    <div ref={viewerRef} style={{ width: '100%', height: '500px' }}></div>
  );
};

export default AnnotoriousViewer;
