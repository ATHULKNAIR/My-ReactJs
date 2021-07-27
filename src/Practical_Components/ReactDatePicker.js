//npm install react-datepicker

import React,{useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function ReactDatePicker() {
    const [date, setDate] = useState(null)
    return (
        <div>
            Date Picker
            <DatePicker selected={date} onChange={dates=>setDate(dates)} dateFormat='dd/MM/yyyy' 
            maxDate={new Date()} 
            isClearable showYearDropdown  scrollableMonthYearDropdown
            filterDate={date=> (date.getDay() !== 0 && date.getDay()!== 6)}/>
        </div>
    )
}

export default ReactDatePicker


// selected prop represents the date selected
// dateFormat --> used to format the date , by default it is MM/dd/yyyy
// minDate --> used to specify the min date that can be selected
// maxDate --> used to specify the max date that can be selected
// filterDate --> used to filter out certain days 
// isClearable --> used to have a button that clears the date selected