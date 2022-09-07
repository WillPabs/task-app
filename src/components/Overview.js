// import { useState } from "react";

import React from "react";

class Overview extends React.Component {
    render () {
        return(
            <div className="Overivew">
                <h3>{this.props.title}</h3>
            </div>        
        )   
    }

}

export default Overview;