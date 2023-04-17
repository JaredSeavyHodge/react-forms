import React from 'react';
import ActivityTile from './ActivityTile';
import Header from './Header';

const Form = ({formData, setFormData}) => {
    return (
        <div className="form">
            <Header />
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