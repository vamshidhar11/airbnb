import React, { Component } from 'react';
import '../css/header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo-box">
          <img alt="Airbnb" src="../img/logo.png" class="logo" />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">is where life happens</span>
          </h1>
          <a href="#section-tours" class="btn btn-white btn-animated">
            Discover our Rooms
          </a>
        </div>
      </header>
    );
  }
}
