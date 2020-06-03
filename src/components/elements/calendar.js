import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const eventItem = (props) => {
    return (
        <div>
            <img className="calender-event-image" src={props.event.imageUrl} /> {props.event.title}
        </div>
    )
}

const CalenderOnee = (props) => {
    console.log(props.events);
    return (
        <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            events={props.events}
            style={props.style}
            components={{
                event: eventItem,
            }}
        />
    )
}

export default CalenderOnee;