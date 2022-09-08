import React from "react";

const Overview = (props) => {
    const { tasks, onDelete } = props;

    return (
        <ul>
            {tasks.map((task, i) => {
                return (
                    <form key={task.id} onSubmit={onDelete} id={task.id}>
                        <p>{i+1}. {task.text}</p>
                        <button 
                            type="submit"
                        >
                            Delete
                        </button>
                    </form>

                )
            })}
        </ul>
    );
};

export default Overview;