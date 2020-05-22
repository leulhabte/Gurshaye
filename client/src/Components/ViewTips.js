import React, {Component} from 'react';
import Heading from './Partials/Heading';
import TipTable from './Partials/TipTable' 

class ViewTips extends Component{
    render() {
        return (
            <div className="Main">
                <Heading title="View Tips"/>
                <TipTable/>
            </div>
        );
    }
}

export default ViewTips;