// Add BandInput component
import React, { Component } from "react"
import uuid from 'uuid'

class BandInput extends Component {
  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const band = { ...this.state, id: uuid() }
    this.props.addBand(band)
    this.setState({
      name: ""
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Band Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
