import React, { Component } from 'react';
import Header from './header/header.js';
import datasHeader from './datas/header.js';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header items={datasHeader}/>
      </div>
    );
  }
}
