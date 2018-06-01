import React from 'react';
import TodoItem from './TodoItem';
import style from '../css/CompletedForm.css';
/**
 * 완료 Todo가 보여지는 Class
 */
class CompletedForm extends React.Component {
    render() {
        const tmpArr = this.props.todoArr.filter(data => { return data.isCompleted == true; });
        const completedTodos = tmpArr.map(value => { return <TodoItem value={value} toggleTodo={this.props.toggleTodo} removeTodo={this.props.removeTodo} /> });
        let emptyMsg ='';
        if(completedTodos.length===0){
            emptyMsg='완료된 할 일이 없습니다';
        }
        return (
            <div className="completed-form">
                <h2>완료</h2>
                <div className="completed-items">
                    {completedTodos} {emptyMsg}
                </div>
            </div>
        );
    }
}

export default CompletedForm;