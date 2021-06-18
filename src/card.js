import React, {Component} from 'react'
import TagCard from './tag'

export default class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardTitle: this.props.cardTitle,
            cardExpress: this.props.cardExpress,
            url: this.props.outsideURL,
            tagName : this.props.tagName,
            movieURL: this.props.movieURL,
            movieHeight: 0
        }
    }

    render(){
        let tagName = this.state.tagName
        let tagList = []
        let movieHeight = this.state.movieHeight

        if(tagName.length > 0){
            for(let i = 0; i < tagName.length; i++){
                tagList.push(<TagCard tagName = {tagName[i]}/>)
            }
        }

        if(this.state.movieURL !== ''){
            movieHeight = 315
        }
        
        return(
            <div className = 'card'>
                <h2 className='cardTitle'>
                    {this.state.cardTitle}
                </h2>
                <div className='cardExpress'>
                    <p>{this.state.cardExpress}</p>
                </div>
                <p><a href = {this.state.url}>{this.state.url}</a></p>
                <div className = 'tag-list'>
                    {tagList}
                </div>
                <iframe width="560" height={movieHeight} src={this.state.movieURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
