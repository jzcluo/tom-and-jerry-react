import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class MapOptionBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : moment(),
            endDate : moment()
        };
    }

    handleChange = (fieldname, date) => {
        let newState = {};
        newState[fieldname] = date;
        this.setState(newState);
    };

    handleButtonClick = () => {
        console.log(this.state.startDate);
    };

    render() {
        return(
            <div className="sidebar">
                <p>Start date:</p>
                <DatePicker className="sidebar-datepicker" selected={this.state.startDate} onChange={this.handleChange.bind(null, "startDate")}/>
                <p>End date:</p>
                <DatePicker className="sidebar-datepicker" selected={this.state.endDate} onChange={this.handleChange.bind(null, "endDate")}/>
                <button className='button' onClick={this.handleButtonClick}>Search By Date</button>
            </div>
        );
    }
}

export default MapOptionBar;
