import React from 'react';
import ActivityTile from './ActivityTile';

const Form = ({formData, setFormData}) => {
    return (
        <div className="form">
            <div className="form-header">
                <div>
                    <label htmlFor="teachers">Teachers:</label>
                    <input type="text" name="teachers" id="teachers" />
                </div>
                <div>
                    <label htmlFor="classroom">Classroom:</label>
                    <input type="text" name="classroom" id="classroom" />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date" />
                </div>
            </div>
            <div className="form-body">
                {[1,2,3,4,5,6].map( i => {
                    return <ActivityTile name={`Interest Activity ${i}`} formData={formData} setFormData={setFormData} />
                })}

                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map( day => {
                    return <>
                        <ActivityTile name={"Large Group ("+ day + ")"} formData={formData} setFormData={setFormData} />
                        <ActivityTile name={"Read Aloud ("+ day + ")"}  formData={formData} setFormData={setFormData} />
                        <ActivityTile name={"Small Group ("+ day + ")"} formData={formData} setFormData={setFormData} />
                    </>
                })}
            </div>
        </div>
    )
}

export default Form;