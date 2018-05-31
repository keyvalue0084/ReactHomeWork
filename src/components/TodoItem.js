import React from 'react';

class TodoItem extends React.Component{
    render(){
        const checked = this.props.value.isCompleted? 'Checked':'';
        
        return (
            <div className="todo-item">
               <input type="checkbox" checked={checked} onClick={() =>{this.props.ToggleTodo(this.props.value.id)}}/>
               <input readOnly type="text" value={this.props.value.text}/>
               <button onClick={() =>{this.props.RemoveTodo(this.props.value.id)}} >삭제</button>
            </div>
        );
    }
}

export default TodoItem;