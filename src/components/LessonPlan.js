import { Component } from "react";

class LessonPlan extends Component {
    render() {
        return (
            <div className="grid-container lesson-plan">
                <div className="table-header"></div>
                <div className="table-header">Monday</div>
                <div className="table-header">Tuesday</div>
                <div className="table-header">Wednesday</div>
                <div className="table-header">Thursday</div>
                <div className="table-header">Friday</div>

                <div className="table-header">Interest Area</div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>

                <div className="table-header">Large Group</div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>

                <div className="table-header">Read Aloud</div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>

                <div className="table-header">Small Group</div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
                <div contentEditable="true" className="grid-item"></div>
            </div>
        )
    }
}

export default LessonPlan;