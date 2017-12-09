import React, { Component } from 'react';
import UserTimezoneList from './UserTimezoneList';
import MeetingTimeForm from './MeetingTimeForm';

class MtgTzContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      users: []
    }

    this.updateIncluded = this.updateIncluded.bind(this);
  }

  componentDidMount() {

    // Get users API endpoint from within wp-admin
    function getHomeUrl() {
      var href = window.location.href;
      var index = href.indexOf('/wp-admin');
      var homeUrl = href.substring(0, index);
      return homeUrl;
    }

    var homeUrl = getHomeUrl();
    let dataRoute = homeUrl + '/wp-json/wp/v2/users/?per_page=100';

    fetch(dataRoute)
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.map(this.addUser).filter(this.hasTz)
        })
      })
      .catch( err => {
        // Use hard-coded sample API endpoint if not run as a plugin
        let dataRoute = 'https://jamiebergen.com/wp-json/wp/v2/users/?per_page=100';
        fetch(dataRoute)
        .then(res => res.json())
        .then(res => {
          this.setState({
            users: res.map(this.addUser).filter(this.hasTz)
          })
        })
      });    

  }

  addUser(user){
    return {
      name: user.name,
      avatar: user.avatar_urls[96],
      timezone: user.user_timezone,
      key: user.id,
      include: true
    }
  }
  // Only include users with timezone selected
  hasTz(user){
    return user.timezone !== '';
  }

  updateIncluded(key, value){

    let userToUpdate = this.state.users.find(user => user.key == key);
    userToUpdate.include = value;
    this.forceUpdate();

  }

  render() {
    return (
      <div>
        <UserTimezoneList entries={this.state.users} updateIncluded={this.updateIncluded} />
        <MeetingTimeForm entries={this.state.users} />
      </div>
    );
  }
}

export default MtgTzContainer;
