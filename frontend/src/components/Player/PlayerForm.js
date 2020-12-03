import React, { Component} from 'react';

export class PlayerForm extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="row">
        <h1>Add a new member</h1>
        <form className="col s12" onSubmit={ this.submitPlayer.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" type="text" ref="firstName"/>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" type="text" ref="lastName"/>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="text" ref="email"/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="phone" type="text" ref="phone"/>
              <label htmlFor="phone">Phone Number</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add Member</button>
        </form>
      </div>
    )
  }
}

export default PlayerForm
