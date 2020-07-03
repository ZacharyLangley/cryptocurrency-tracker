import React from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings/Settings';
import './App.scss';

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar/>
        <Settings />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
