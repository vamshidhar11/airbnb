import React from 'react';
import './css/App.css';
import Content from './components/content.js';
import Header from './components/header.js';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <hr />
        <Content />
      </div>
    );
  }
}
export default App;
