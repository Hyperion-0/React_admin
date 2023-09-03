import React,{Component} from "react";

// import { Header } from "antd/es/layout/layout";
import { 
    Form,
    Input,
    Button,
    Icon,
    message
 } from "antd"
 import './login.less'
 import {LockOutlined,UserOutlined } from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils'
import logo from '../../assets/images/logo.png'
import {reqLogin} from '../../api'
const Item= Form.Item



class login extends Component{
    // onFinish = (values) =>{
    //     console.log('Received values of form: ', values);
    // }
//前端数据验证
handLeSubmit =(event)=>{

    event.preventDeafault()


  this.props.form.validateFields(async(err,values)=>{
    if(!err){
        const {username,password}=values
       const result = await reqLogin(username,password)

       if(result.status === 0){

        message.success('登录成功')
        // 保存用户登录信息
        const user = result.data
        storageUtils.saveUser(user)
        memoryUtils.user = result.data
        //页面跳转因为不需要引入所以使用push
        this.props.history.replace('/')
       }else{
        message.error(result.msg)
       }
    }else{
        console.log('检验失败！')
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
                        <Form onSubmit={this.handLeSubmit} className="login-form"       
                        //   initialValues={{
                        //   remember: true,
                        //  }}
                        //  onFinish={onFinish} 
                          >
                            <Item            
                        name="username" 
                        initialValue='admin'
                        rules={[
                        {  required: true, message: 'Please input your Username!'},
                        { min: 4,message:'用户名必须大于四位数'},
                        {max:12, message:'用户名必须小于12位'},
                        {pattern: /^[a-zA-Z0-9_]+$/,message:'用户名必须是英文、数组或下划线'},
                            ]
                    } 
                          >
                                <Input prefix={<UserOutlined style = {{color:'rgba(0,0,0,.25)'}}/>}  placeholder="用户名"   />
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