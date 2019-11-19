import React, { Component } from "react";
import { connect } from "react-redux";
// import { addBand } from "../actions/bands"
import BandInput from "../components/BandInput";
import Bands from "../components/Bands"

class BandsContainer extends Component {
  render() {
    console.log(this.props)
    console.log(this.props.bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands}/>
      </div>
    );
  }
}

const mapStateToProps = ({bands}) => {
  return ({bands})
};

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: "ADD_BAND", band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
