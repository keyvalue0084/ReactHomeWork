import React from 'react';
import TodoItem from './TodoItem';

class CompletedForm extends React.Component{  
    render(){
        const tmpArr= this.props.todoArr.filter(data =>{return data.isCompleted ==true;});
        const completedTodos = tmpArr.map(value => { return <TodoItem value = {value} ToggleTodo={this.props.ToggleTodo} RemoveTodo={this.props.RemoveTodo}/>});
        return (            
            <div className="completed-form">
                <h2>완료</h2>
                {completedTodos}
            </div>
        );
    }
}

export default CompletedForm;