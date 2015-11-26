import React from 'react';

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },
  render: function render() {
    return <div>Hello mo'fucker, my name is {this.props.name} ok ?</div>;
  },
});
