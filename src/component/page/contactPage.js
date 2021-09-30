import React, {Component} from 'react'
import Header from '../atoms/header'
import Footer from '../atoms/footer'

export default class ContactPage extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className = 'contact' id = 'mainPage'>
            <Header title = 'Contact'/>
            <div className = 'nonevisivle-block'></div>
            <div className='big-card'>
                <h3>github：<a href='https://github.com/KotaAsano'>https://github.com/KotaAsano</a></h3>
                <h3>Mail：asame05shark@gmail.com</h3>
                <h3>Twitter：@a_same_shark</h3>
            </div>
            <div className = 'nonevisivle-block'></div>
            <Footer />
          </div>
        )
    }
}