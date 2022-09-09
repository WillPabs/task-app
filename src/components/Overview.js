import React from "react";
import Task from "./Task";

const Overview = (props) => {
    const { tasks, onDelete } = props;

    return (
        <ul>
            {tasks.map((task, i) => {
                return (
                    <Task 
                        key={task.id} 
                        onDelete={onDelete} 
                        text={task.text} 
                        id={task.id}
                        index={i}
                    />
                )
            })}
        </ul>
    );
};

export default Overview;