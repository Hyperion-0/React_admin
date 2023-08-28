import React,{Component} from "react";
// import { Header } from "antd/es/layout/layout";
import { 
    Form,
    Input,
    Button,
    Icon
 } from "antd"
 import './login.less'
 import {LockOutlined,UserOutlined } from '@ant-design/icons';

import logo from '../../assets/images/logo.png'
const Item= Form.Item

class login extends Component{
    render(){
        return(
            <div className="login">
             
                    <header className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>React项目:后台管理系统</h1>
                    </header>

                    <section className="login-content">
                        <h2>用户登录</h2>
                        <Form onSubmit={this.login} className="login-form">
                            <Item>
                                <Input prefix={<UserOutlined style = {{color:'rgba(0,0,0,.25)'}}/>}  placeholder="用户名"/>
                            </Item>
                            <Form.Item>
                                <Input prefix= {<LockOutlined style = {{color:'rgba(0,0,0,.25)'}}/> } type="password" placeholder="密码"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                             </Form.Item>
                        </Form>
                    </section>
                           
            </div>
        )
    }
}

export default  login