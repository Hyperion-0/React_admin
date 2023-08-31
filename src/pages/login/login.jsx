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
    // onFinish = (values) =>{
    //     console.log('Received values of form: ', values);
    // }
//前端数据验证
Login =()=>{
  this.props.form.validateFields(async(err,values)=>{
    if(!err){

        const {username,password}=values
        console.log('提交登录请求',username,password)
    }else{
        console.log(err)
    }
  })
};


// 建议换成将回调函数换成promise
validator = (rule, value, callback) => {
    // console.log(rule, value)
    const length = value && value.length
    const pwdReg = /^[a-zA-Z0-9_]+$/
    if (!value) {
    // callback 如果不传参代表校验成功,如果传参代表校验失败,并且会提示错误
    callback('必须输入密码')
    } else if (length < 4) {
    callback('密码必须大于 4 位')
    } else if (length > 12) {
    callback('密码必须小于 12 位')
    } else if (!pwdReg.test(value)) {
    callback('密码必须是英文、数组或下划线组成')
    } else {
    callback() // 必须调用 callback
    }
}

    render(){

        // getFieldDecorator = this.props.form

        return(
            <div className="login">
             
                    <header className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>React项目:后台管理系统</h1>
                    </header>

                    <section className="login-content">
                        <h2>用户登录</h2>
                        <Form onSubmit={this.login} className="login-form"       
                          initialValues={{
                          remember: true,
                         }}
                        //  onFinish={onFinish} 
                          >
                            <Item       
                        name="username"
                        rules={[
                        {  required: true, message: 'Please input your Username!'},
                        { min: 4,message:'用户名必须大于四位数'},
                        {max:12, message:'用户名必须小于12位'},
                        {pattern: /^[a-zA-Z0-9_]+$/,message:'用户名必须是英文、数组或下划线'}
                        ]}
                          >
                                <Input prefix={<UserOutlined style = {{color:'rgba(0,0,0,.25)'}}/>}  placeholder="用户名"/>
                            </Item>
                            <Form.Item
                            name = "password"
                            rules={[
                                   {   validator :this.validator}
                                
                            ]}
                            >
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