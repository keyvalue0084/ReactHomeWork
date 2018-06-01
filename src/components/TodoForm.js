import React from 'react';
import InputForm from './InputForm';
import CompletedForm from './CompletedForm';
import UncompletedForm from './UncompletedForm';
import MessageForm from './MessageForm';


import style from '../css/TodoForm.css';


/**
 * 할 일 관리 메인이되는 Class
 * 입력 폼(InputForm),  미완료 폼(UncompletedForm), 완료 폼(CompletedForm)
 * 으로 구성되어있음
 */
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //todo정보 배열
            todoArr: [],
            msg:''
        };
    }
    id = 0;
    //todo내용 입력 받음
    onChange = (e) =>{
        if(e.target.value.length>40){
            this.setState({
               msg: '할일은 간결하게 입력하는게 좋지요.'
            });
        }else{
            this.setState({
                msg:''
             });
        }
    }
    //todo 생성
    todoCreate = (e) => {
        const inputTag = document.querySelector('input.todo-input');
        if(inputTag.value.length==0){
            this.setState({
                msg:'빈 내용으로 할일을 추가할 수 없습니다.'
             });
            return ;
        }
        this.setState({
            todoArr: this.state.todoArr.concat({
                //할일 id
                id: this.id++,
                //내용
                text: inputTag.value,
                //완료 유무
                isCompleted: false
            })
        });
        inputTag.value = '';
    }
    //완료 상태 토글
    toggleTodo = (id) => {
        this.setState({
            todoArr: this.state.todoArr.map(value => {
                if (value.id === id) { value.isCompleted = value.isCompleted ? false : true; }
                return value;
            })
        });
    }
    //할일 삭제
    removeTodo = (id) => {
        this.setState({
            todoArr: this.state.todoArr.filter(value => {
                if (value.id !== id) { return value.id != id }
            })
        });
    }

    render() {
        return (
            <div className="todo-form">
                <h1>할 일 관리</h1>
                <br />
                <InputForm todoCreate={this.todoCreate} onChange={this.onChange} />
                <MessageForm msg={this.state.msg}/>
                <br />
                <br />
                <UncompletedForm todoArr={this.state.todoArr} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
                <br />
                <br />
                <CompletedForm todoArr={this.state.todoArr} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
            </div>


        );
    }
}

export default TodoForm;