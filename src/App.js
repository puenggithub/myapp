import React from 'react';
import './App.css';
import Axios from 'axios'
import MovieItem from './MovieItem';

class App extends React.Component { 
    /*default state*/
    constructor(props) {
        super(props)
        this.state = { rows: []}
    }

    componentDidMount() {
        this.search('her')
    }
    
    /*function seach and set state*/
    search=(keyword)=>{
        console.log(keyword)
        var dataArray = []
        var url ="https://api.themoviedb.org/3/search/movie?api_key=884f2cac78207168dc6250f5657d6efa&query=" + keyword
        Axios.get(url).then(result=>{
            console.log(JSON.stringify(result.data.results))
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
            <div className="App">
              <table className="Navbar" >
               <tbody>
                   <tr>
                       <td>
                           <img src={require('./assets/logo.svg')} width="50"/>
                       </td>
                       <td>
                           Test Website
                       </td>
                   </tr>
               </tbody>
              </table>          
           

            <input style={{fontSize: 18, display: 'block', width: '100%', paddingLeft: 8}} 
            placeholder="Enter your movie keyword"
            onChange={(event)=> {this.search(event.target.value)}}/>

            { /* for loop to display title name from rows  */}
            <div style={{margin: '0 auto', width: '50%'}}>
            { this.state.rows.map(item=> (
                 
                <MovieItem movie={item}/>
                
            ))}
           </div>
    

            </div>         
        );
    }


}


export default App