import React from 'react';
import style from '../css/TodoItem.css'
import img from '../img/delete.png';
/**
 * Todo 아이템 Class
 */
class TodoItem extends React.Component {
    render() {
        const checked = this.props.value.isCompleted ? 'Checked' : '';

        return (
            <div className="todo-item">
                <input className="todo-item-check" type="checkbox" checked={checked} onClick={() => { this.props.toggleTodo(this.props.value.id) }}  /> <label></label>
                <input className="todo-item-text"  type="text" readOnly value={this.props.value.text} />
                <input className="todo-item-button" type="image" src={img}  onClick={() => { this.props.removeTodo(this.props.value.id) }} />
            </div>
        );
    }
}

export default TodoItem;