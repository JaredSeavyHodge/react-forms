import React, { useEffect, useState } from "react";

const ActivityTile = ({ name, formData, setFormData }) => {
    const storedData = JSON.parse(localStorage.getItem(name)) || {};
    const [activity, setActivity] = useState(formData && formData[name]?.activity || storedData.activity ||  "");
    const [objective, setObjective] = useState(formData && formData[name]?.objective || storedData.objective ||"");

    useEffect(() => {
        setFormData( prev => ({ ...prev, [name]: { "activity": activity, "objective": objective } } ))
         localStorage.setItem(name, JSON.stringify({
             activity: activity,
             objective: objective
        }));
    }, [activity, objective])

    const handleChanges = e => {
        let name = e.target.name || e.target.id;
        let value = e.target.value || e.target.innerText;

        if (name === "activity") {
            setActivity(value);
        } else if (name === "objective") {
            setObjective(value);
        }
    };

    return (
        <div className="activity-tile">
            <div className="activity-tile-header">
                <h3>{name}</h3>
            </div>
            <div className="activity-tile-body">
                
                <div className="activity-tile-input">
                    <label htmlFor="activity">Activity:</label>
                    <input type="text" name="activity" id="activity" onChange={handleChanges} value={activity} />
                </div>
                <div className="activity-tile-input">
                    <label htmlFor="objective">Objective:</label>
                    <div contentEditable="true" id="objective" className="activity-tile-body-right" onBlur={handleChanges} dangerouslySetInnerHTML={{ __html: objective }} />
                </div>
                
            </div>
        </div>
    )
}

export default ActivityTile;