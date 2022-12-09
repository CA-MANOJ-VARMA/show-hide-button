// Write your code here
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  firstname = () => {
    const {firstname} = this.state
    this.setState({firstname: !firstname})
  }

  lastname = () => {
    const {lastname} = this.state
    this.setState({lastname: !lastname})
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <>
        <div>
          <h1>Show/Hide</h1>
          <div style={{display: 'flex'}}>
            <div>
              <button type="button" onClick={this.firstname}>
                Show/Hide Firstname
              </button>
              {firstname ? <p>Joe</p> : ''}
            </div>
            <div>
              <button type="button" onClick={this.lastname}>
                Show/Hide Lastname
              </button>
              {lastname ? <p>Jonas</p> : ''}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ShowHide
