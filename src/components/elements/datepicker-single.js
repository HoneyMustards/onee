import React, {useState} from 'react';
import moment from 'moment';
import {  SingleDatePicker } from "react-dates";
import "react-dates/initialize";

const DatePickerSingle = ({dates, onChange}) => {

    const [focused, setFocused] = useState(false);
    const [date, setDate] = useState(moment());

    const handleFocus = ({ focused }) => {
        setFocused(focused);
    }
    
    const handleChange = (date) => {
        setDate(date);
    }

    return (
        <div className="single-date-picker">
            <SingleDatePicker
                date={date}
                onDateChange={(date) => { handleChange(date) }}
                focused={focused}
                onFocusChange={handleFocus}
                numberOfMonths={1} 
                id={Math.random().toString()}
            />   
        </div>     
    )
}


export default DatePickerSingle;