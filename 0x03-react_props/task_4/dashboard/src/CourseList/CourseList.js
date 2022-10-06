import React from "react"
import "./CourseList.css"
import CourseListRow from "./CourseListRow"

function CourseList() {
    return (
        <table>
            <thead>
                <CourseListRow textFirstCell="Available courses" isheader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="20" isHeader={false}/>
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false}/>
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false}/>
            </tbody>
        </table>
    )
}

export default CourseList
