import React, {Component} from 'react'

export default class TagCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            tagName: this.props.tagName
        }
    }

    render(){
        return(
            <p className ='tag-card'>#{this.props.tagName}</p>
        )
    }
}