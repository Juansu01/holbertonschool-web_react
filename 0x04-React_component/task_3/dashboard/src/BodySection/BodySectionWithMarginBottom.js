import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySection.css";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="body-section-with-margin">
                <BodySection {...this.props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.defaultProps = {
  title: ""
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
};

export default BodySectionWithMarginBottom;