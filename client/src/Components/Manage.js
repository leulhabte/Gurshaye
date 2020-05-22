import React, {Component} from 'react';
import Heading from './Partials/Heading';
import ManageTable from './Partials/ManageTable' 

class ManageTip extends Component{
    render() {
        return (
            <div className="Main">
                <Heading title="Manage"/>
                <ManageTable/>
            </div>
        );
    }
}

export default ManageTip;