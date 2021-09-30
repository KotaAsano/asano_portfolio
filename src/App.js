import React, { Component } from 'react'
import HomePage from './component/page/homePage'
import ProfilePage from './component/page/profilePage'
import ReseachPage from './component/page/reseachPage'
import SkillPage from './component/page/skillPage'
import WorkPage from './component/page/workPage'
import HobbyPage from './component/page/hobbyPage'
import ContactPage from './component/page/contactPage'
import Menubar from './component/template/menubar'
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
