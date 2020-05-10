import React, {useState} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";

const DatePicker = ({dates, onChange}) => {

    const [focused, setFocused] = useState(null);
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(null);

    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    return (
        <DateRangePicker
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          endDateId="end-date"
          hideKeyboardShortcutsPanel
          //customInputIcon={<i className="icon icon-calendar"></i>}
          verticalSpacing={50}
          onDatesChange={handleDatesChange}
          focusedInput={focused}
          onFocusChange={focusedInput => setFocused(focusedInput)}
        />
    )
}

DatePicker.propTypes = {
    dates: PropTypes.number
}

DatePicker.defaultProps = {
    dates: null
} 

export default DatePicker;