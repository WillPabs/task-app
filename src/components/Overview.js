// import { useState } from "react";

import React from "react";

class Overview extends React.Component {
    constructor() {
        super();
        
        this.state = {
            tasks: []
        };
    }

    render () {
        return(
            <div className="Overivew">
                <div>
                    <input type="text" />
                    <button onSubmit={this.props.onButtonSubmit}>Submit</button>
                </div>
                <h3>{this.props.title}</h3>
            </div>        
        )   
    }

}

export default Overview;