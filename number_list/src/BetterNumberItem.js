import React, { Component } from 'react';

class BetterNumberItem extends Component {

  constructor(props) {
    super(props);
    this.handlerRemove = this.handlerRemove.bind(this);
  }

  // handlerRemove - parent event
  handlerRemove(e) {
    // remove - child event
    this.props.remove(this.props.value)
  }

  render() {
    return(
      <li>
        {this.props.value}
        <button onClick={this.handlerRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;