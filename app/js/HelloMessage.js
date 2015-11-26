import React from 'react';

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },
  render: function render() {
    return <div>Hello, my name is {this.props.name}</div>;
  },
});
