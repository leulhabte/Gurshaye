import React, {Component} from 'react';
import FormFill from './Partials/FormAdd';
import InsertTips from './Partials/InsertTips';
import Heading from './Partials/Heading';
import {CssBaseline} from '@material-ui/core'


class AddTips extends Component{
    render(){
        return(
            <div>
                <CssBaseline/>
                <div>
                    <Heading title = "Insert Tips"/>
                    <InsertTips/>
                </div>                
            </div>
        );
    }
}

export default AddTips;