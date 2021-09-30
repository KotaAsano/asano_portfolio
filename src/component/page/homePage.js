import React ,{Component} from 'react'
import Header from '../atoms/header'
import Footer from '../atoms/footer'

export default class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = 'home' id = 'mainPage'>
                <Header title = 'Home' />
                <div className = 'nonevisivle-block'></div>
                <div className = 'big-card'>
                    <h2>Welcome</h2>
                    <h3>浅野広大のポートフォリオです</h3>
                </div>
                <div className = 'nonevisivle-block'></div>
                <Footer />
            </div>
        )
    }
}