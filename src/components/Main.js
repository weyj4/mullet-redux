import React, { Component} from 'react';
import { connect } from 'react-redux';
import Facebook from './Facebook';
import Display from './Display';
import { fetchData } from '../actions';

function mapStateToProps(state) {
  return {
    mainData: state.mainData
  };
}

class Main extends Component {
  render() {
    return (
      <div>
        <Facebook
          title="Welcome to the Mullet Stack."
          subtitle="Facebook in the front. Walmart in the back."
          fetchData={(cat) => this.props.dispatch(fetchData(cat))}
        />
        <Display
          category={this.props.mainData.category}
          displayData={this.props.mainData.data}
        />
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: React.PropTypes.func,
  mainData: React.PropTypes.object
};

export default connect(mapStateToProps)(Main);
