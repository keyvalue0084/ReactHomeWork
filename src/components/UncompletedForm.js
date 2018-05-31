import React from 'react';
import TodoItem from './TodoItem';

class UncompletedForm extends React.Component{  
    render(){        
        const tmpArr= this.props.todoArr.filter(data =>{return data.isCompleted ==false;});
        const unCompletedTodos = tmpArr.map(value => { return <TodoItem value = {value} ToggleTodo={this.props.ToggleTodo} RemoveTodo={this.props.RemoveTodo}/>});
        return (
            <div className="uncompleted-form">
                <h2>미완료</h2>
                {unCompletedTodos}
            </div>
        );
    }
}

export default UncompletedForm;