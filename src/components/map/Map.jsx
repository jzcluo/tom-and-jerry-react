import React from 'react';
import MapArea from './MapArea';
import MapOptionBar from './MapOptionBar';

class Map extends React.Component {

    render() {
        return(
            <div>
                <MapOptionBar />
                <MapArea />
            </div>
        );
    }

}

export default Map;
