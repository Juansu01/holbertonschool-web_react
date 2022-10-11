import React, { Component } from "react";

class BodySection extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { children, title } = this.props
        return (
            <div className="body-section">
                <h2>{title}</h2>
                {children}
            </div>
        );
    }
}

export default BodySection;
