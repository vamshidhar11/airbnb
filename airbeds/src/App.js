import React from 'react';
import './css/App.css';
import Content from './components/content.js';
import  Header from "./components/header.js";

class App extends React.Component{
    render(){
        return(
            <div className="container1">
            <Header/>
            <Content/>
            </div>
        )
    }
}
export default App
        
