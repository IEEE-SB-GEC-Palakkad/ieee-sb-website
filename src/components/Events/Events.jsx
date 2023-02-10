import React from 'react'
import './Events.css'
import eventData from '../../helpers/events.json'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'

const Events = () => {
    const [events, setEvents] = React.useState([0])

    return (
        <>
            <div className="events">
                <div className='events-header'>Events</div>
                <div className="event-details">
                    <div className="event-contents">
                        <h3 className="event-name">
                            {eventData[0][events].name}
                        </h3>
                        <p className="event-description">
                            {eventData[0][events].details}
                        </p>
                        <div className="event-explore">
                            <button>Explore</button>
                        </div>
                        <div className="nav-btn">
                            <button onClick={()=>setEvents(Math.abs(events-1)%3)}>
                                <img src={left} alt="" />
                            </button>
                            <button onClick={()=>setEvents((events+1)%3)}>
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="event-image">
                        <img src={eventData[0][events].img} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Events