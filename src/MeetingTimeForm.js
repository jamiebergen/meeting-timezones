import React, { Component } from 'react';
import UserMeetingTimes from './UserMeetingTimes';
import moment from 'moment';
import 'moment-timezone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class MeetingTimeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      timeZone: '',
      input: {},
      output: []
    };

    this.createOptions = this.createOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateChanged = this.dateChanged.bind(this);
  }

  // Set initial timezone after data is retrieved for entries
  componentWillReceiveProps(props) {
    if (this.state.timeZone === '') {
      this.setState({timeZone: props.entries[0].timezone});
    }
  }

  handleChange(event) {
    this.setState({timeZone: event.target.value});
  }

  handleSubmit(event) {

    var userTimezones = this.props.entries;

    // Calculate meeting times for each user and add to object

    var refDate = this.state.date.format('YYYY-MM-DD HH:mm');
    var refTimezone = this.state.timeZone;
    var reference = moment.tz(refDate, refTimezone);

    userTimezones.forEach(function(element) {
      var target = reference.clone().tz(element.timezone);
      element.mtgtime = target.format('MMMM Do, YYYY, h:mm a'); 
    });

    this.setState({
      input: {
          mtgdate: this.state.date.format('MMMM Do, YYYY, h:mm a'),
          mtgtz: this.state.timeZone
      },
      output: userTimezones,
    });

    event.preventDefault();
  }

  dateChanged(d){
    this.setState({date: d});
  }

  createOptions(user) {
    return (
      <option value={user.timezone}>
        {user.timezone}
      </option>
    )
  }

  render() {

    var userTimezones = this.props.entries;
    var timeZoneOptions = userTimezones.map(this.createOptions);

    return (
      <div className="mtg-tz-form-container">
        <div className="mtg-tz-form column right">
          <h2>Meeting Time and Timezone</h2>

          <DatePicker
            selected={this.state.date}
            onChange={this.dateChanged}
            showTimeSelect
            inline
            timeIntervals={15}
            shouldCloseOnSelect={false}
            dateFormat="LLL" />

          <form onSubmit={this.handleSubmit}>
            <label>
              Timezone:
              <select value={this.state.timeZone} onChange={this.handleChange}>
                {timeZoneOptions}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <UserMeetingTimes input={this.state.input} output={this.state.output} />
      </div>
    );
  }

};

export default MeetingTimeForm;
