import React from "react";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            id: props.id,
            isEditing: false,
            onDelete: props.onDelete,
            index: props.index,
        }
    };

    resubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          task: { 
            text: e.target.value,
          },
        });
        const text = document.querySelector(`#${this.state.text}`);
        text.setAttribute('contenteditable', false);
        this.handleResubmitClick();
      }

    editTask = () => {
        const text = document.querySelector(`#${this.state.text}`);
        text.setAttribute('contenteditable', true);
        text.focus();
        this.handleEditingClick();
    }

    handleEditingClick = () => {
        this.setState({isEditing: true});
    }

    handleResubmitClick = () => {
        this.setState({isEditing: false});
    }

    handleChange = (e) => {
        this.setState({
          task: {
            text: e.target.value,
            id: this.state.id,
            index: this.state.index,
          },
        });
      };

    render() {
        const { id, index, onDelete } = this.props;
        const { text, isEditing } = this.state;
        let editButton;
        if (isEditing) {
            editButton = <button type="button" onClick={this.resubmitTask}>Resubmit</button>
        } else {
            editButton = <button type="button" onClick={this.editTask}>Edit</button>
        }
        return (
            <form key={id} onSubmit={onDelete} id={id}>
                <p>{index + 1}. <span id={text} onChange={this.handleChange}>{text}</span></p>
                {editButton}
                <button type="submit">
                    Delete
                </button>
            </form>
        );
    };
}

export default Task;