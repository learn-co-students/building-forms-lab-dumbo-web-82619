import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  render() {

    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <br/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const addBand = (name) => {
  return {
    type: 'ADD_BAND',
    name
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {addBand: (band) => dispatch(addBand(band))}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
