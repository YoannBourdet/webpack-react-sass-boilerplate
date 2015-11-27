import React, { Component } from 'react';
import Item from './headerItem.js';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {active: 0};
  }
  setActive(id) {
    this.setState({active: id});
  }
  render() {
    const self = this;
    return (
      <header>
        <ul>
          {this.props.items.map((el, index) => {
            return (
              <Item onClick={() => this.setActive(index)} active={self.state.active === index} key={index} name={el.name} url={el.url} />
            );
          })}
        </ul>
      </header>
    );
  }
}

Header.propTypes = { items: React.PropTypes.array };
