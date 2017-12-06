import React, { Component } from 'react';
import UserTimezoneList from './UserTimezoneList';
import MeetingTimeForm from './MeetingTimeForm';

class MtgTzContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {

    function getHomeUrl() {
      var href = window.location.href;
      var index = href.indexOf('/wp-admin');
      var homeUrl = href.substring(0, index);
      return homeUrl;
    }

    var homeUrl = getHomeUrl();

    //let dataRoute = 'http://www.reactplugin.dev/wp-json/wp/v2/users/?per_page=100';
    let dataRoute = homeUrl + '/wp-json/wp/v2/users/?per_page=100';

    fetch(dataRoute)
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res.map(this.mapUser).filter(this.hasTz)
        })
      })

  }

  mapUser(user){
    return {
      name: user.name,
      avatar: user.avatar_urls[96],
      timezone: user.user_timezone,
      key: user.id
    }
  }
  // Only include users with timezone specified
  hasTz(user){
    return user.timezone !== '';
  }

  render() {
    return (
      <div>
        <UserTimezoneList entries={this.state.users} />
        <MeetingTimeForm entries={this.state.users} />
      </div>
    );
  }
}

export default MtgTzContainer;
