import React from "react"
import PropTypes from "prop-types"

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {

    let component

    if (isHeader) {

        if (textSecondCell === null) {
            component = <th colSpan="2">{textFirstCell}</th>
        } else {
            component = (<><td>{textFirstCell}</td><td>{textSecondCell}</td></>)
        }

    } else if (isHeader === false) {
        element = (<><td>{textFirstCell}</td><td>{textSecondCell}</td></>)
    }

    return (<tr>{component}</tr>)
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
}

export default CourseListRow