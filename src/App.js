//https://reactjsexample.com/react-side-nav-component/

import React from 'react';
import './App.css';
import Axios from 'axios'
import MovieItem from './MovieItem';
import Header from'./components/Header';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class App extends React.Component { 
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
            <div className="App">
                <Header />
              <table className="Navbar" >
               <tbody>
                   <tr>
                       <td>
                           <img src={require('./assets/logo.svg')} width="50"/>
                       </td>
                       <td style={{padding: 20}}>
                           Test Website
                       </td>
                   </tr>
                   <tr>
                       <td>
                           
                       </td>
                   </tr>
               </tbody>
              </table>          
           
            <div >
                <input style={{fontSize: 18, display: 'block', width: 1000, marginLeft: 70}} 
                placeholder="Enter your movie keyword"
                onChange={(event)=> {this.search(event.target.value)}}/>
            </div>
            <br />

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