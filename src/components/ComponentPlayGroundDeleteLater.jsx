import React, { Component } from 'react';
import Assignment from './assignment';
import Lab from './lab';

class ComponentPlayGround extends Component {
    state = {  } 
    render() { 
        return (
            <div className='viewport'>
                <Lab/>
                <Assignment/>
            </div>
        );
    }
}
 
export default ComponentPlayGround;