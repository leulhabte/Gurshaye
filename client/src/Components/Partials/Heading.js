import React, {Component} from 'react';

class Heading extends Component{
    render() {
        return (
            <div className="Heading">
                <h2><span>{this.props.title}</span></h2>
            </div>
        );
    }
}

export default Heading;