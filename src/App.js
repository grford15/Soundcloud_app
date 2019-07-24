import React from 'react';
import Stream from './components/Stream';
import './App.css';

function App() {
  const tracks = [
    {
      title: 'Some track',
    },
    {
      title: 'Another track',
    },
  ];

  return <Stream tracks={tracks} />;
}

export default App;
