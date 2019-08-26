//https://reactjsexample.com/react-side-nav-component/

import React from 'react';
import './App.css';
import Header from'./components/Header';
import { Route } from 'react-router-dom'
import HomeComponent from './components/Home'
import DragDropComponent from './components/DragDrop'


class App extends React.Component { 
    
    

    render() {
       return (
            <div className="App">

            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <img src={require('./assets/logo.svg')} width="50"/>
                    </div>
                    <ul class="nav" style={{fontSize: 16}}>
                        <li><a href="/" className="navbar-item">Home</a></li>
                        <li><a href="/dragdrop" className="navbar-item">Drag & Drop</a></li>

                    </ul>
                </div>
            </nav>
            <div className="App">
                <Route exact path="/" component={HomeComponent}  />
                <Route path="/dragdrop" component={DragDropComponent}  />
            </div>
        </div>         
        );
    }

}


export default App