import React, { Component } from 'react';

class UserMeetingTimes extends Component {

  constructor(props) {
    super(props);

    this.createList = this.createList.bind(this);
 
  }

  createList(item) {
    if (item.include) {
      return <li key={item.key}>{item.name}: {item.mtgtime} ({item.timezone})</li>
    }
  }

  render() {

    var input = this.props.input;

    var output = this.props.output;
    var listItems = output.map(this.createList);

    return (
      <div className="user-mtg-times">
        <h2>User Meeting Times</h2>
        <p>Meeting Date/Time: {input.mtgdate}</p>
        <p>Meeting Timezone: {input.mtgtz}</p>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

};

export default UserMeetingTimes;
