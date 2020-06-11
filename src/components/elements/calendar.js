import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment)

const eventItem = (props) => {
    return (
        <div>
            {typeof props.event.price == 'undefined' &&
             <div className="reserved ">
                <img className="calender-event-image" src={props.event.imageUrl} /> {props.event.title}
             </div>
            }
            {typeof props.event.price != 'undefined' &&
                <div className="price">
                    <p className="calender-event-price">{props.event.price}</p>
                </div>
            }
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
            selectable={true}
            components={{
                event: eventItem,
            }}
        />
    )
}

export default CalenderOnee;