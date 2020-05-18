import React, { Component } from 'react';
import CardList from '../../components/CardList';
class DishesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { keyword } = this.props.location.state;
    return (
      <div>
        <CardList keyword={keyword} />
      </div>
    );
  }
}

export default DishesList;
