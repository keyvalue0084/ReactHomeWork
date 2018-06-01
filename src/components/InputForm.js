import React from 'react';
import style from '../css/InputForm.css';

/**
 * Todo 내용을 입력받고 추가하는 Class
 */
class InpurForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="input-form">
                <input type='text' className="todo-input" placeholder="할일 입력" maxLength="41" onChange={this.props.onChange}/><button className='add-button'onClick={this.props.todoCreate}>할일 추가</button>
            </div>
        );
    }
}

export default InpurForm;