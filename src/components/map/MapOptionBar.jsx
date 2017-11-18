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

    render() {

        let sidebar;

        switch (this.props.displayOption) {
            case 'SEARCHBYDATE':
                sidebar =   <div>
                                <p>Start date:</p>
                                <DatePicker className="sidebar-datepicker" selected={this.state.startDate} onChange={this.handleChange.bind(null, "startDate")}/>
                                <p>End date:</p>
                                <DatePicker className="sidebar-datepicker" selected={this.state.endDate} onChange={this.handleChange.bind(null, "endDate")}/>
                                <button className='button' onClick={() => this.props.onDateButtonClick(this.state.startDate, this.state.endDate)}>Search By Date</button>
                                <button className='button' onClick={() => this.props.onDisplayReportButtonClick()}>Display Report</button>
                                <button className='button' onClick={() => this.props.onAddReportButtonClick()}>Add Report</button>
                            </div>
                break;
            case 'ADDREPORT':
                sidebar =   <div>
                                <button className='button' onClick={() => this.props.onBackButtonClick()}>Back</button>
                            </div>
                break;
            case 'DISPLAYREPORT':
                sidebar =   <div>
                                <button className='button' onClick={() => this.props.onBackButtonClick()}>Back</button>
                            </div>
                break;
        }


        return(
            <div className="sidebar">
                {sidebar}
            </div>
        );
    }
}

export default MapOptionBar;
