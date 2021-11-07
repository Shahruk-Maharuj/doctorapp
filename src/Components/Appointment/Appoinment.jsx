import React from 'react';
import Availability from './Availability/Availability';
import AppointHeader from './AppointHeader/AppointHeader'

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointHeader date={date} setDate={setDate}/>
            <Availability date={date}/>
        </div>
    );
};

export default Appoinment;