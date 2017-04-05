import React, { Component} from 'react';

export default class Display extends Component {
  switchOnCategory(cat) {
    switch(cat) {
      case 'starships':
        return (
          <div>
            <div>Name: {this.props.displayData.name}</div>
            <div>Model: {this.props.displayData.model}</div>
            <div>Class: {this.props.displayData.starship_class}</div>
          </div>
        );
      case 'people':
        return (
          <div>
            <div>Name: {this.props.displayData.name}</div>
            <div>Gender: {this.props.displayData.gender}</div>
          </div>
        );
      case 'planets':
        return (
          <div>
            <div>Name: {this.props.displayData.name}</div>
            <div>Climate: {this.props.displayData.climate}</div>
            <div>Terrain: {this.props.displayData.terrain}</div>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {this.switchOnCategory(this.props.category)}
      </div>
    );
  }
}

Display.propTypes = {
  displayData: React.PropTypes.object,
  category: React.PropTypes.string
};
