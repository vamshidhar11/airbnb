import React from 'react';
import './css/App.css';
import Content from './components/content.js';
import  Header from "./components/header.js";

class App extends React.Component{
    render(){
        return(
            <div>
            <Header/>
            <Content/>
            </div>
        )
    }
}
export default App
        
