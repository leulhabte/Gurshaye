import React, {Component} from 'react';
import FormFill from './Partials/FormAdd'
import Heading from './Partials/Heading'

class AddTips extends Component{
    render(){
        return(
            <div>
                <div className="Main">
                    <Heading title = "Insert Tips"/>
                    <FormFill/>
                </div>                
            </div>
        );
    }
}

export default AddTips;