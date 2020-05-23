import React, {Component} from 'react';
import Heading from './Partials/Heading';
import TipTable from './Partials/TipTable' 
import axios from 'axios';

class ViewTips extends Component{

    constructor(props){
        super(props);
        this.state = {aipInformation: ''};
    }

    callApi(){
        fetch('http://localhost:8000/posts').then((result)=>{
            result.json();
        }).then(aipInformation=>{
            this.setState({aipInformation},()=>{console.log(aipInformation)})
        });
    }

    componentDidMount(){
        axios.get('http://localhost:8000/posts')
        .then(res=>{
            console.log(res.data);
            // this.setState({info: res},()=>{console.log(info)});
        })        
    }

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