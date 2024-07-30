// src/components/EpubReader.js
import React, { useState, useRef } from 'react';
import { EpubView } from 'react-reader';

const EpubReader = ({ url }) => {
  const [location, setLocation] = useState(null);
  const epubViewRef = useRef(null);

  const handleLocationChanged = loc => {
    setLocation(loc);
  };

  const goToPrevPage = () => {
    epubViewRef.current.prevPage();
  };

  const goToNextPage = () => {
    epubViewRef.current.nextPage();
  };

  return (
    <div style={{ height: '100vh' }}>
      <div>
        <button onClick={goToPrevPage}>Previous</button>
        <button onClick={goToNextPage}>Next</button>
      </div>
      <EpubView
        ref={epubViewRef}
        url={url}
        location={location}
        locationChanged={handleLocationChanged}
      />
    </div>
  );
};

export default EpubReader;
