import React from 'react';
import '../App.css';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Toronto'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //save the info
    event.preventDefault();
  }

  render() {
    return (
      <>
      <form>
        <div className='form-control'>
          <label>Location: </label>
          <select className = 'select-control' >
            <option selected value="Toronto">Toronto</option>
            <option value="KW">Kitchener/Waterloo</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Banff">Banff</option>
          </select>
          <br/>
          <br/>
          <input className="waitListAddButton" type='button' onClick={() => window.open("/searchlist", "_self")} value="Submit" />
        </div>
      </form>
      </>
    )
  }
};

export default Start;