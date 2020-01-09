import React, {useEffect} from 'react';
import Display from './Display'
import NavBar from './NavBar'
import './App.css';
import Profile from './Profile'
import './fonts/KulimPark-ExtraLight.ttf'
import {InfoProvider} from './InfoContext'


function App() {
  
  useEffect(() => {
    console.log('ag')
  }, [])
  return (
    <InfoProvider>
      <div className="App">
        <div className="Jah">
          <Profile />
          <NavBar />
          <Display />
        </div>
      </div>
    </InfoProvider>
  );
}

export default App;
