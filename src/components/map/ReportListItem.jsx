import React from 'react';


class ReportListItem extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{`Borough : ${this.props.Borough}`}</li>
                    <li>{`City : ${this.props.City}`}</li>
                    <li>{`Created Date : ${this.props.createdDate}`}</li>
                    <li>{`Incident Address : ${this.props.incidentAddress}`}</li>
                    <li>{`Incident Zip : ${this.props.incidentZip}`}</li>
                </ul>
                <hr style={{width : 200}}/>
            </div>
        );
    }
}

export default ReportListItem;
