import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import * as firebase from 'firebase';
import { Scrollbars } from 'react-custom-scrollbars';

import ReportListItem from './ReportListItem';

import 'react-datepicker/dist/react-datepicker.css';

class MapOptionBar extends React.Component {
    constructor(props) {
        super(props);
        switch (this.props.displayOption) {
            case 'SEARCHBYDATE':
                this.state = {
                    startDate : moment(),
                    endDate : moment()
                };
                break;
            case 'ADDREPORT':
                this.state = {
                    Borough : "",
                    City : "",
                    "Incident Address" : "",
                    "Incident Zip" : ""
                };
                break;
            case 'DISPLAYREPORT':
                for (let i =0 ;i < this.props.reportArray.length; i++) {
                    console.log(this.props.reportArray[i]);
                }
                break;
        }
    }
    //for add report
    handleSubmit = (event) => {
        event.preventDefault();
        let database = firebase.database();
        let IDEntry = database.ref('/').child('IDcounter').child('counter');
        IDEntry.once('value', (snapshot) => {
            let ID = snapshot.val();
            let newID = 40000000 + Number(ID);
            //upload new report
            database.ref('/').child("Entries/" + newID).set({
                Borough : this.state.Borough,
                City : this.state.City,
                "Created Date" : moment().format('YYYY/MM/DD hh:mm:ss'),
                "Incident Address" : this.state["Incident Address"],
                "Incident Zip" : this.state["Incident Zip"]
            });

            this.setState({
                Borough : "",
                City : "",
                "Incident Address" : "",
                "Incident Zip" : ""
            });
            //increment counter
            database.ref('/').child("IDcounter").set({
                counter : ID+1
            })
        });
    };
    //for choosing dates
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
                                <button className='button' onClick={() => this.props.onGraphButtonClick()}>Graph</button>
                            </div>
                break;
            case 'ADDREPORT':
                sidebar =   <div className="addreport-form">
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="Borough">Borough:</label>
                                    <input type="text" id="Borough" value={this.state.Borough}
                                           onChange={this.handleChange.bind(null, 'Borough')}/>
                                    <label htmlFor="City">City:</label>
                                    <input type="text" id="City" value={this.state.City}
                                           onChange={this.handleChange.bind(null, 'City')}/>
                                    <label htmlFor="Incident Address">Incident Address:</label>
                                    <input type="text" id="Incident Address" value={this.state["Incident Address"]}
                                           onChange={this.handleChange.bind(null, 'Incident Address')}/>
                                    <label htmlFor="Incident Zip">Incident Zip:</label>
                                    <input type="text" id="Incident Zip" value={this.state["Incident Zip"]}
                                           onChange={this.handleChange.bind(null, 'Incident Zip')}/>
                                    <input type="submit" className="button"/>
                                    <button className='button' onClick={() => this.props.onBackButtonClick()}>Back</button>
                                </form>
                            </div>
                break;
            case 'DISPLAYREPORT':
                sidebar =   <div>
                                <button className='button' onClick={() => this.props.onBackButtonClick()}>Back</button>
                                <Scrollbars style={{ width: 200, height: 550 }}>
                                    <div>
                                        {this.props.reportArray.map((reportItem) => {
                                            return <ReportListItem key={reportItem["Incident Address"] + reportItem.City + reportItem["Created Date"]} Borough={reportItem.Borough} City={reportItem.City} createdDate={reportItem["Created Date"]} incidentAddress={reportItem["Incident Address"]} incidentZip={reportItem["Incident Zip"]}></ReportListItem>
                                        })}
                                    </div>
                                </Scrollbars>
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
