import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <div onClick={() => this.props.fetchData('starships')}>Starships</div>
        <div onClick={() => this.props.fetchData('people')}>People</div>
        <div onClick={() => this.props.fetchData('planets')}>Planets</div>
      </div>
    );
  }
}
