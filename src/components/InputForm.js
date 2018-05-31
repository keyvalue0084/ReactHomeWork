import React from 'react';

class InpurForm extends React.Component{
    constructor(props) {
        super(props);       
      }
    render(){
        
        return (
            <div className="input-form">
                <input type='text' className="todo-input"/>
                <button onClick={this.props.todoCreate}>할일 추가</button>
            </div>
        );
    }
}

export default InpurForm;