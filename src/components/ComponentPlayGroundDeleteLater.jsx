import React, { Component } from 'react';
import Assignment from './assignment';
import Lab from './lab';
import Sidebar from './Sidebar';

class ComponentPlayGround extends Component {
    state = {  } 
    render() { 
        return (
            <div className='viewport'>
                <Sidebar />
            </div>
        );
    }
}

export default ComponentPlayGround;