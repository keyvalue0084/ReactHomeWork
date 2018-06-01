import React from 'react';
import style from '../css/MessageForm.css';
/**
 * 입력 내용에 대한 정보를 출력하는 Class
 */
class MessageForm extends React.Component {    
    render() {

        return (
            <div className="message-form">
            {this.props.msg}                
            </div>
        );
    }
}

export default MessageForm;