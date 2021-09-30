import React, {Component} from 'react'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title,
            express: this.props.express,
            pageClass: this.props.pageClass
        }
    }

    render(){
        return(
            <header className = 'headbox'>
                <h1 className = 'title'>
                    {this.state.title}
                </h1>
            </header>
        )
    }
}