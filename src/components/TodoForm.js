import React from 'react';
import InputForm from './InputForm';
import CompletedForm from './CompletedForm';
import UncompletedForm from './UncompletedForm';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            todoArr:[],
        };
    }
    id=0;

    todoCreate = () =>{   
        let tmpText = document.querySelector('input.todo-input').value
        this.setState({
            todoArr: this.state.todoArr.concat({
                id:this.id++,
                text:tmpText,
                isCompleted:false
            })
        });
        document.querySelector('input.todo-input').value='';
    }

    ToggleTodo =(id) =>{
        this.setState({
            todoArr: this.state.todoArr.map(value => {
                if(value.id==id){value.isCompleted = value.isCompleted?false:true;}
                return value;
            })
        });
    }

    RemoveTodo =(id) =>{
        this.setState({
            todoArr: this.state.todoArr.filter(value => {
                if(value.id==id){return value.id!=id}                
            })
        });
    }
    render(){  
        return (
            <div className="todo-form">
                <h1>할 일 관리</h1>
                <br/>
                <InputForm todoCreate={this.todoCreate}/>
                <br/>
                <br/>
                <UncompletedForm todoArr={this.state.todoArr} ToggleTodo={this.ToggleTodo} RemoveTodo={this.RemoveTodo} />
                <br/>
                <br/>
                <CompletedForm todoArr={this.state.todoArr} ToggleTodo={this.ToggleTodo} RemoveTodo={this.RemoveTodo}/>
            </div>
            

        );
    }
}

export default TodoForm;