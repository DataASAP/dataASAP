import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Header extends Component {
    render(){
        return(
            <Segment inverted color='blue'><h3>DataASAP De-identification Tool</h3></Segment>
        );
    };

};

export default Header;