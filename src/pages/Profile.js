import React from 'react';

class Profile extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container glass-morphism-1">Profile</div>
        <p align = "center">
          <label>
            Hospital: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Address: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/>
          <p align="center">
            <input className="waitListAddButton" type="Change" />
          </p>
        </p>
      </form>
    );
  }
}

export default Profile;