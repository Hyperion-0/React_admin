import React,{Component} from "react";

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

const onFinishFailed =(values)=>{
    // console.log(values.username)

}

// checkAuth=async()=>{
          
//     if (this.formRef && this.formRef.current){ //很重要，在render后，formRef才实例化
//          try {
//              // 使用 validateFields 获取多个字段值,若验证通过，则返回表单值数组
//              const values = await this.formRef.current.validateFields();
//              console.log('Validate Success:', values);
  
//              //执行提交数据
  
//            } catch (errorInfo) {
//              //若验证失败，返回数组{values:{表单值数组},errorFields:{验证未通过的表单值数组:{errors,name}}}
//              console.log('Failed:', errorInfo);
//            }
  
//      }
//   }


const  onFinish =(values)=>{
//     async()=>{
//     console.log(values)
//     const value = await this.formRef.curent.validateField();
//     console.log(value)
// }
    // async()=>{
//     if(!err){
// const values = await this.formRef.current.validateFields();
// console.log('Validate Success:', values);
//     }
// }






//   async(err,values)=>{
    
//         if(!err){
//             const {username,password}=values
//            const result = await reqLogin(username,password)
//            if(result.status === 0){
//             console.log(result)
            
//             message.success('登录成功',2)
//             // 保存用户登录信息
//             const user = result.data
//             storageUtils.saveUser(user)
//             memoryUtils.user = result.data
//             //页面跳转因为不需要引入所以使用push
//             this.props.history.replace('/')
//            }else{
//             message.error(result.msg)
//            }
//         }else{
//             console.log('检验失败！')
//         }
//       })



}


class login extends Component{
    myForm = React.createRef()
  
    // onFinish = (values) =>{
    //     console.log('Received values of form: ', values);
    // }
//前端数据验证






// 建议换成将回调函数换成promise
validator = (rule, value) => {

    const length = value && value.length
    const pwdReg = /^[a-zA-Z0-9_]+$/
    if (!value) {
    // callback 如果不传参代表校验成功,如果传参代表校验失败,并且会提示错误
   return Promise.reject('必须输入密码')
    } else if (length < 4) {
        return Promise.reject('密码必须大于 4 位')
    } else if (length > 12) {
        return Promise.reject('密码必须小于 12 位')
    } else if (!pwdReg.test(value)) {
        return   Promise.reject('密码必须是英文、数组或下划线组成')
    } else {
        console.log(value)
        return  Promise.resolve() // antd4不能使用callback
    }
}

    render(){




        
        // 如果用户已经登陆 , 自动跳转到 admin
// if (memoryUtils.user && memoryUtils.user._id) {
//     return <Redirect to='/'/>
//     }
// const {getFieldDecorator} = this.props.form

        // getFieldDecorator = this.props.form

        return(
            <div className="login">
             
                    <header className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>React项目:后台管理系统</h1>
                    </header>

                    <section className="login-content">
                        <h2>用户登录</h2>
                        <Form className="login-form"     
                         onFinish={onFinish}   
                        onFinishFailed={onFinishFailed}
                        ref = {this.formRef}
                        //   initialValues={{
                        //   remember: true,
                        //  }}
                        
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
                            ref = {this.formRef}
                            // rules={[
                            //        {   validator :this.validator}
                                
                            // ]}
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