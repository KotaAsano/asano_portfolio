import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'

export default class Munubar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isMenuState: false,
            buttonNameArray: ['home-button', 'profile-button' ,'reseach-button' ,'skill-button', 'work-button', 'hobby-button', 'contact-button'],
            pageNameArray: ['home', 'profile', 'reseach', 'skill', 'work', 'hobby', 'contact'],
            menuBtnName: 'menu-button',
            isBtnJudge: false,
            currentPage: 'home-button'
        }
    }

    onClickChangePage = e =>{
        for(let i = 0; i < this.state.pageNameArray.length; i++){
            if(e.target.className === this.state.buttonNameArray[i]){
                document.getElementsByClassName(this.state.pageNameArray[i])[0].style.display = 'flex'
                this.setState({currentPage: e.target.className})
            }else{
                document.getElementsByClassName(this.state.pageNameArray[i])[0].style.display = 'none'
            }
        }
    }

    onClickMove = e => {
        this.setState({isBtnJudge: !this.state.isBtnJudge})
    }

    onClickMoveMenu = e => {
        if(this.state.isMenuState){
            document.getElementsByClassName('menubar')[0].style.left = '-300px'
            this.setState({isMenuState: false})
            //this.setState({menuBtnName: 'menu-button'})
        }else{
            document.getElementsByClassName('menubar')[0].style.left = 0
            this.setState({isMenuState: true})
            //this.setState({menuBtnName: 'menu-button-active'})
        }
    }

    render(){
        return(
            <div>
                <div className = {this.state.menuBtnName} onClick = {this.onClickMove}>
                    <CSSTransition in = {this.state.isBtnJudge} classNames = 'menu-btn-a'>
                        <span></span>
                    </CSSTransition>
                    <CSSTransition in = {this.state.isBtnJudge} classNames = 'menu-btn-b'>
                        <span></span>
                    </CSSTransition>
                    <CSSTransition in = {this.state.isBtnJudge} classNames = 'menu-btn-c'>
                        <span></span>
                    </CSSTransition>
                </div>
                <CSSTransition in = {this.state.isBtnJudge} classNames = 'slide-menu'>
                    <div className = 'menubar'>
                        <div className = 'page-button'>
                            <div className = 'home-button' onClick = {this.onClickChangePage}>Home</div>
                            <CSSTransition in = {(this.state.currentPage === 'home-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                            <div className = 'profile-button' onClick = {this.onClickChangePage}>Profile</div>
                            <CSSTransition in = {(this.state.currentPage === 'profile-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                            <div className = 'reseach-button' onClick = {this.onClickChangePage}>Reseach</div>
                            <CSSTransition in = {(this.state.currentPage === 'reseach-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                            <div className = 'skill-button' onClick = {this.onClickChangePage}>Skill</div>
                            <CSSTransition in = {(this.state.currentPage === 'skill-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                            <div className = 'work-button' onClick = {this.onClickChangePage}>Work</div>
                            <CSSTransition in = {(this.state.currentPage === 'work-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                            <div className = 'hobby-button' onClick = {this.onClickChangePage}>Hobby</div>
                            <CSSTransition in = {(this.state.currentPage === 'hobby-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                            <div className = 'contact-button' onClick = {this.onClickChangePage}>Contact</div>
                            <CSSTransition in = {(this.state.currentPage === 'contact-button') ? true:false} classNames = 'page-btn-change'>
                                <div className = 'underbar'></div>
                            </CSSTransition>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        )
    }
}
