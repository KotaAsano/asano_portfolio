import React, { Component } from 'react'
import HomePage from './homePage'
import ProfilePage from './profilePage'
import ReseachPage from './reseachPage'
import SkillPage from './skillPage'
import WorkPage from './workPage'
import HobbyPage from './hobbyPage'
import ContactPage from './contactPage'
import Menubar from './menubar'
import './App.css';

export default class App extends Component{
  render(){
    return(
      <div>
        <Menubar />
        <HomePage />
        <ProfilePage />
        <ReseachPage />
        <SkillPage />
        <WorkPage />
        <HobbyPage />
        <ContactPage />
      </div>
    )
  }
}
