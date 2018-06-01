import React from 'react';
import TodoItem from './TodoItem';
import style from '../css/UncompletedForm.css';
/**
 * 미완료 Todo가 보여지는 Class
 */
class UncompletedForm extends React.Component {
    render() {
        const tmpArr = this.props.todoArr.filter(data => { return data.isCompleted == false; });
        const unCompletedTodos = tmpArr.map(value => { return <TodoItem value={value} toggleTodo={this.props.toggleTodo} removeTodo={this.props.removeTodo} /> });
        let emptyMsg ='';
        if(unCompletedTodos.length===0){
            emptyMsg='할 일이 없습니다';
        }
        return (
            <div className="uncompleted-form">
                <h2>미완료</h2>
                <div className="uncompleted-items">
                    {unCompletedTodos} {emptyMsg}
                </div>
            </div>
        );
    }
}

export default UncompletedForm;