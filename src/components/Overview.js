import React from "react";

const Overview = (props) => {
    const { tasks, onDelete, onEdit } = props;

    return (
        <ul>
            {tasks.map((task, i) => {
                return (
                    <form key={task.id} onSubmit={onDelete} id={task.id}>
                        <p>{i+1}. <span id={task.text}>{task.text}</span></p>
                        <button type="button" onClick={onEdit}>
                            Edit
                        </button>
                        <button type="submit">
                            Delete
                        </button>
                    </form>

                )
            })}
        </ul>
    );
};

export default Overview;