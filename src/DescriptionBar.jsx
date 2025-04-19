import React from "react";
import "./DescriptionBar.css";

function DescriptionBar () {
    return (
        <div className="description-bar flex justify-between items-center px-4 py-2">
            <span>Tasks</span>
            <span>Status</span>
            <span>Actions</span>
        </div>
    )
}

export default DescriptionBar;
/*
* *This is the description bar component that will be used to display the tasks, status and actions of the tasks.
*/