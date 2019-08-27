
import React, { Component } from 'react'
import './style.css'


export default class Movieitem2 extends Component {
    constructor(props){
        super(props)
        this.state = { mode: 1 }
    }

    handleCard() {
        var rDate = new Date(this.props.movie.release_date)
        var today = new Date()
        //var vote = this.props.movie.vote_average
 
        //console.log(this.props.movie.vote_average)
        if (this.props.movie.vote_average < 7){ 
            this.setState({
                mode: 0
              })
            }
        console.log(this.props.movie.vote_average)
    }
    

     componentDidMount() {
        
        this.handleCard()
     }
    render() {
        const {id, title, overview, poster_src, poster_path, vote_average} = this.props.movie
        const modes = this.state.mode
   
        let first,last, path, old;
        first = poster_path.indexOf("/")
        last = poster_path.indexOf(".jpg")
        path = poster_path.substring(first+1,last)
       
            if (modes) {
            return (                 
                <div className="polaroid row container-fluid">             
                    <div class="col-sm-3 col-md-6" style={{backgroundColor: 'lavender'}}><img src={poster_src} style={{width: '60%'}} /></div>
                    <div class="col-sm-3 col-md-6 text" style={{backgroundColor: 'white',  paddingTop: 75}}>{title} || {vote_average} || {this.state.mode} || {modes}</div>
                   
                </div>
            )
            } else {
                return (                 
                    <div className="polaroid row container-fluid">             
                        <div class="col-sm-3 col-md-6" style={{backgroundColor: '#5B2C6F'}}><img src={poster_src} style={{width: '60%'}} /></div>
                        <div class="col-sm-3 col-md-6 text" style={{backgroundColor: 'white',  paddingTop: 75}}>{title} || {vote_average} || {this.state.mode} || {modes}</div>
                      
                    </div>
                )
            }
        
    }
}
