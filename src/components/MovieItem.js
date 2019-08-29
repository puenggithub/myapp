
import React, { Component } from 'react'
import './style.css'
import MyEditor from './MyEditor';
import { BrowserRouter, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'




export default class Movieitem extends Component {

    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
            pathname: '/editor',
            state: { message: JSON.stringify(this.props.movie, undefined, 4) }
        }} />
        }
      }

      
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
       // console.log(this.props.movie.vote_average)
    }
    
     componentDidMount() {
        
        this.handleCard()
     }


    render() {
        const {id, title, overview, poster_src, poster_path, vote_average, popularity} = this.props.movie
        //console.log(JSON.stringify(this.props.movie, undefined, 2))
        const content = JSON.stringify(this.props.movie, undefined, 2)
        const modes = this.state.mode

        //this.setState({json: content})
   
        let first,last, path, old;
        first = poster_path.indexOf("/")
        last = poster_path.indexOf(".jpg")
        path = poster_path.substring(first+1,last)
       
        {/* 
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
        */}

        return (
            <div className="A">
                <table >

                    <tbody>
                    <tr>
                        <td>{title}</td>
                        <td>{vote_average}</td>
                        <td>{popularity}</td>
                        {this.renderRedirect()}
                        <button onClick={this.setRedirect}>Redirect</button>
                       
                    </tr>
                    </tbody>
                </table>

               
                
            </div>
        )
    }
}
