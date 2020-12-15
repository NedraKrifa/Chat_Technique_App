import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { sendMessage } from "../../actions/messageActions"
const { TextArea } = Input;

function InputMsg() {
    const dispatch = useDispatch();
    const [text,setText]=useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(sendMessage(text));
        setText("");
    }
    return (
        <Form className="message-input">
            <TextArea 
                rows={1} 
                placeholder="Type a message" 
                className='inputField' 
                onChange={e=>setText(e.target.value)}
                value={text}
            />
            <Button 
                type="primary" 
                className="Btn-send"
                icon={<SendOutlined />} 
                htmlType="submit"
                onClick={e=>onSubmit(e)}  
            />
        </Form>
    )
}
export default InputMsg;