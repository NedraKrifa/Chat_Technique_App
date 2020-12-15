import React from 'react'
import logo from '../../Assets/Logo/large_deskcode1.png';
import { Menu } from 'antd';
import { MessageOutlined, HomeOutlined, ContactsOutlined, LogoutOutlined } from '@ant-design/icons';

function ChatHeader() {
    
    return (
        <div className='chat-header'>
            <div>
                <img src={logo} alt="DeskCode" width="150px" style={{ marginRight: "700px"}} />
            </div>
            <div>
                <Menu mode="inline" className="menu-chat" >
                    <Menu.Item key="home" icon={<HomeOutlined className="header-icon" />} className="menu-chat_item">
                        HOME
                    </Menu.Item>
                    <Menu.Item key="chat" icon={<MessageOutlined className="header-icon" />} className="menu-chat_item">
                        CHAT
                    </Menu.Item>      
                    <Menu.Item key="contacts" icon={<ContactsOutlined className="header-icon" />} className="menu-chat_item">
                        CONTACTS
                    </Menu.Item>    
                    <Menu.Item key="logout" icon={<LogoutOutlined className="header-icon" />} className="menu-chat_item">
                        LOGOUT
                    </Menu.Item> 
                </Menu>
            </div>
        </div>
    )
}

export default ChatHeader;
