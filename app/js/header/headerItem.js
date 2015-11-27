import React, { Component } from 'react';

export default class HeaderItem extends Component {
  render() {
    const Klass = this.props.active ? 'active' : '';
    return (
      <li onClick={this.props.onClick} className={Klass}>
        <a href={this.props.url}>{this.props.name}</a>
      </li>
    );
  }
}

HeaderItem.propTypes = {
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  active: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};
