import React from 'react';
import './App.css';
import Axios from 'axios'

class App extends React.Component { 
    
    search=(keyword)=>{
        console.log(keyword)
        Axios.get('https://dog.ceo/api/breeds/list/all').then(result=>{
            console.log(result.data)
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
            </div>
        );
    }


}


export default App