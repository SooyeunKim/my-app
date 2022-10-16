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
        <p align = "center">
          <br/>
          <div className="input-container">
            <div className="glass-morphism-1">
              <div className="title">
                Profile
              </div>
              <br/>
              <div className="input-container">
                <label>Hospital Name: </label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br/>
              </div>
              <div className="input-container">
                <label>Address: </label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br/>
                <br/>
              </div>
              <input className="waitListAddButton" type="submit" />
            </div>
            
          </div>
        </p>
      </form>
      
    );
  }
}

export default Profile;