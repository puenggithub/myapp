//https://reactjsexample.com/react-side-nav-component/

import React from 'react';
import './App.css';
import Header from'./components/Header';
import { Route } from 'react-router-dom'
import HomeComponent from './components/Home'
import DragDropComponent from './components/DragDrop'
import DragDropComponent2 from './components/DragDrop2'
import OrderComponent from './components/Order'
import TableComponent from './components/Table'


class App extends React.Component { 
    
    render() {
       return (
            <div className="App">

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <img src={require('./assets/logo.svg')} width="50"/>
                    </div>
                    <ul className="nav" style={{fontSize: 16}}>
                        <li><a href="/" className="navbar-item">Home</a></li>
                        <li><a href="/dragdrop" className="navbar-item">DnD</a></li>
                        <li><a href="/dragdrop2" className="navbar-item">DnD2</a></li>
                        <li><a href="/order" className="navbar-item">Order</a></li>
                        <li><a href="/table" className="navbar-item">Table</a></li>
                    </ul>
                </div>
            </nav>
            <div className="App">
                <Route exact path="/" component={HomeComponent}  />
                <Route path="/dragdrop" component={DragDropComponent}  />
                <Route path="/dragdrop2" component={DragDropComponent2}  />
                <Route path="/order" component={OrderComponent}  />
                <Route path="/table" component={TableComponent}  />
            </div>
        </div>         
        );
    }

}


export default App