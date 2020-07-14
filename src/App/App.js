import React from 'react';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings/Settings';
import Dashboard from '../Dashboard/Dashboard';
import Content from '../Shared/Content';
import './App.scss';

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar/>
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </AppLayout>
    </AppProvider>
  );
}

export default App;
