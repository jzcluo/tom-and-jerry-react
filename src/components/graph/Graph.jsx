import React from 'react';
import BarChart from 'react-bar-chart';
import * as firebase from 'firebase';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        let yearArray = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
        this.state = {
            data : []
        };
        for (let i = 0; i < 8; i++) {
            firebase.database()
                    .ref('/')
                    .child('Entries')
                    .orderByChild('Created Date')
                    .startAt(yearArray[i])
                    .endAt(yearArray[i+1])
                    .once('value', (snapshot) => {
                        console.log(snapshot.numChildren());
                        let data = this.state.data;
                        data.push({text : yearArray[i], value : snapshot.numChildren()});
                        this.setState({
                            data
                        });
                    });
        }
    }
    render() {

        let margin = {
            top : 70,
            bottom : 40,
            left : 100,
            right : 40
        };
        return (
            <BarChart data={this.state.data} margin={margin} width={1000} height={400}/>
        );
    }
}

export default Graph;
