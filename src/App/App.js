import React from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import './App.scss';

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar/>
        Welcome to my Cryptocurrency Tracker
      </AppLayout>
    </AppProvider>
  );
}

export default App;
