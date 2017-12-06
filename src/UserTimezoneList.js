import React, { Component } from 'react';

class UserTimezoneList extends Component {
  constructor(props) {
    super(props);
 
    this.createList = this.createList.bind(this);
  }

  createList(item) {
    return (
      <li key={item.key}>
        <img src={item.avatar} alt=""/>
        {item.name + ': ' + item.timezone}
      </li>
    )
  }

  render() {
    var userTimezones = this.props.entries;
    var listItems = userTimezones.map(this.createList);

    return (
      <div className="user-tzs column left">
        <h2>User Timezones</h2>
        <em>Update timezones from within the Users menu.</em> 
        <ul>
            {listItems}
        </ul>
      </div>
    );
  }

};

export default UserTimezoneList;