import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import React from 'react';
// export default React.PureComponent;
// export const pureComponentAvailable = true;

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {startDate: null, endDate: null, focusedInput: null}
  }

  render() { 
    // const startDateString = this.state.start_date;
    // const dateObj1 = new Date(startDateString);
    // const momentObj1 = moment(dateObj1);

    // const endDateString = this.state.end_date;
    // const dateObj2 = new Date(endDateString);
    // const momentObj2 = moment(dateObj2);
    return (
     <DateRangePicker
      startDate = { this.state.startDate } // momentPropTypes.momentObj or null,
      startDateId = "1" // PropTypes.string.isRequired,
      endDate = { this.state.endDate } // momentPropTypes.momentObj or null,
      endDateId = "2" // PropTypes.string.isRequired,
      onDatesChange = {({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
      focusedInput={ this.state.focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={ focusedInput => this.setState({ focusedInput }) } // PropTypes.func.isRequired,
     />
   )
  }
}

export default DatePicker;