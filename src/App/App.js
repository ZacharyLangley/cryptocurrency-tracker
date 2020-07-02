import React from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import './App.scss';

function App() {
  return (
    <AppLayout>
      <AppBar/>
      Welcome to my Cryptocurrency Tracker
    </AppLayout>
  );
}

export default App;
