import React from 'react';
import configureStore from './stores/configureStore';
import * as actions from './actions';
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

  const store = configureStore();
  store.dispatch(actions.setTracks(tracks));

  return <Stream tracks={tracks} />;
}

export default App;
