import React, {Component} from 'react'

const initialState = {
  name: ''
}

class BandInput extends Component {

  state = initialState

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState(initialState)
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type='text' 
            name='name' 
            value={this.state.name} 
            onChange={this.handleOnChange}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
