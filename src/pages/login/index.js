import React,{Component} from "react";
import { Header } from "antd/es/layout/layout";
import logo from '../../assets/images/logo.png'



export default class login extends Component{
    render(){
        return(
            <div className="login">
                <div>
                    <header className="login-header">
                        <img src={logo} alt="logo"/>
                        <h1>React项目:后台管理系统</h1>
                    </header>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}