import React, { Component } from 'react';

class UserTimezoneList extends Component {
  constructor(props) {
    super(props);
 
    this.createList = this.createList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const key = target.name;

    this.props.updateIncluded(key, value);
  }

  createList(item) {
    return (
      <div className="user-checkbox">
      <label className="user-timezone" key={item.key}>
        
        <input
          name={item.key}
          type="checkbox"
          checked={item.include}
          onChange={this.handleInputChange} />

        <img src={item.avatar} alt=""/>
        {item.name + ': ' + item.timezone}

      </label>
      </div>
    )
  }

  render() {
    var userTimezones = this.props.entries;
    var listItems = userTimezones.map(this.createList);

    return (
      <div className="user-tzs column left">
        <h2>User Timezones</h2>
        <em>Update timezones from within the Users menu.</em> <br />
        <em>Use checkboxes to select individuals who will be included in the meeting.</em>
        <form>
            {listItems}
        </form>
      </div>
    );
  }

};

export default UserTimezoneList;