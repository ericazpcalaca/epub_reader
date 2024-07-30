// src/App.js
import React from 'react';
import EpubReader from './components/EpubReader';

const App = () => {
  const fileUrl = `${process.env.PUBLIC_URL}/mecanica.epub`;

  return (
    <div className="App">
      {fileUrl && <EpubReader url={fileUrl} />}
    </div>
  );
};

export default App;
