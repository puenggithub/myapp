//https://reactjsexample.com/react-side-nav-component/

import React from 'react';
import Axios from 'axios'
import MovieItem from './MovieItem';
import Header from'./Header';
import './style.css'


class Home extends React.Component  {
    /*default state*/
    constructor(props) {
        super(props)
        this.state = { rows: []}
    }

    componentDidMount() {
       // this.search('her')
       this.search('harry')
    }

    /*function seach and set state*/
    search=(keyword)=>{
        console.log(keyword)
        var dataArray = []
        var url ="https://api.themoviedb.org/3/search/movie?api_key=884f2cac78207168dc6250f5657d6efa&query=" + keyword
        Axios.get(url).then(result=>{
            console.log(result.data.results)
            /*loop for array and add item to dataArray*/
            result.data.results.forEach(item=> {
                item.poster_src = "http://image.tmdb.org/t/p/w185" + item.poster_path
                dataArray.push(item)
            })

            /*set new value to state*/
            this.setState({rows: dataArray});
        })
    }
    


    render() {
       return (
            <div className="container-fluid">
         
           
            <div >
                <input style={{fontSize: 18, display: 'block', width: 1000, marginLeft: 300}} 
                placeholder="Enter your movie keyword"
                onChange={(event)=> {this.search(event.target.value)}}/>
            </div>
            <br />

            { /* for loop to display title name from rows  */}
            <div  style={{margin: '0 auto', width: '50%'}}>
                <table>
                    <th style={{width: 300}}>Title</th>
                    <th style={{width: 20}}>Vote</th>
                    <th style={{width: 20}}>Popularity</th>

                </table>

                { this.state.rows.map(item=> (                  
                    <MovieItem movie={item}/> 
                                      
                ))}
           </div>

    
         
            </div>         
        );
    }


}


export default Home