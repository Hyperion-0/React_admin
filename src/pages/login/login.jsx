import React,{Component, useEffect} from "react";

// import { Header } from "antd/es/layout/layout";
import { 
    Form,
    Input,
    Button,
    Icon,
    message,

 } from "antd"
 import './login.less'
 import {LockOutlined,UserOutlined } from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils'
import logo from '../../assets/images/logo.png'
import {reqLogin} from '../../api'
const Item= Form.Item

// const onFinishFailed =(values)=>{
//     // console.log(values.username)

// }



class Login extends Component{
    // onFinish = (values) =>{
    //     console.log('Received values of form: ', values);
    // }
    constructor() {
        super();
        this.myRef = React.createRef();
    }

//前端数据验证
    onFinish =async (values) => {
        // console.log(this.myRef)
        // const {username,password} =values

        const res =await reqLogin(values);
        console.log(res)
        if(res.status === 0){
            memoryUtils.user = res.data
            const user =res.data
            // this.props.navigate("/admin")
            this.props.history.replace('/')
            message.success("登录成功")
        }else{
            message.error(res.msg)
        }


// {


        
//         // this.myRef.current.validateFields().then((err,value) => {
            
          
//         //    const result = reqLogin(username,password)
        
//         //     // 验证通过
//         //     // console.log(values)
//         // }, () => {
//         //     //  验证失败
            
//         // })
//     }
    

    }


// 建议换成将回调函数换成promise
validator = (rule, value) => {

    const length = value && value.length
    const pwdReg = /^[a-zA-Z0-9_]+$/
    if (!value) {
    // callback 如果不传参代表校验成功,如果传参代表校验失败,并且会提示错误
   return Promise.reject('必须输入密码')
    } 
    // else if (length < 4) {
    //     return Promise.reject('密码必须大于 4 位')
    // } 
    else if (length > 12) {
        return Promise.reject('密码必须小于 12 位')
    } else if (!pwdReg.test(value)) {
        return   Promise.reject('密码必须是英文、数组或下划线组成')
    } else {
        // console.log(value)
        return  Promise.resolve() // antd4不能使用callback
    }
}



    render(){

        const user = memoryUtils.user
        return(
            <div className="login">
             
                    <header className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>React项目:后台管理系统</h1>
                    </header>

                    <section className="login-content">
                        <h2>用户登录</h2>
                        <Form className="login-form"     
                            onFinish={this.onFinish}   
                            ref={this.myRef}
                        >
                            <Item            
                        name="username" 
                        initialValue='admin'
                        rules={[
                        {  required: true, message: 'Please input your Username!'},
                        // { min: 4,message:'用户名必须大于四位数'},
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


export default Login