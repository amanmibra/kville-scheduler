import React, { Component } from 'react';

class AllSet extends Component {
  render() {
    const data = this.props.login.signUpData;
    const tentType = {
      'black': 'Black',
      'dblack': 'Dirty Black',
      'blue': 'Blue',
      'dblue': 'Dirty Blue',
      'white': 'White'
    };
    return (
      <div>
        By clicking "Login" you are confirming that the following information is correct:
        <br />
        <br />
        <strong>Name: </strong>
        <br />
        { data.name }
        <br />
        <br />
        <strong>Email:</strong>
        <br/>
        { data.email }
        <br />
        <br />
        <strong>Team: </strong>
        <br />
        { data.team }
        <br />
        <br />
        <strong>Tent Type:</strong>
        <br/>
        { data.tentType }
      </div>
    );
  }
}

export default AllSet;
