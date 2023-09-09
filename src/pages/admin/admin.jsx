import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import storageUtils from '../../utils/storageUtil';
import memoryUtils from '../../utils/memoryUtils'
// import './Admin.less'
import LeftNav from '../../components/LeftNav'
import MHeader from '../../components/MyHeader'
import { Switch,Route } from "react-router-dom";


import Home from '../Home/home.js';
import Category from '../Category/category.js';
import Product from '../Product/product.js'
import Role from '../Role/role.js';
import User from '../User/user.js';
import Bar from '../Charts/bar.js';
import Line from '../Charts/line.js';
import Pie from '../Charts/pie.js';

import { Layout } from 'antd';

const { Content, Footer } = Layout;

export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    // 读取保存的user 如果不存在，直接跳转到登录及诶面
    // const user = storageUtils.getUser();
    const user = memoryUtils.user;
    if (!user._id) {
      // render中不能这样写 这种方法很一般在事件回调函数中进行路由跳转
      // this.props.history.replace('/login')
      return <Redirect to='/login' />
    }
    return (
      <Layout style={{height:'100%'}}>
        <LeftNav collapsed={this.state.collapsed}></LeftNav>
        
        <Layout>
          <MHeader collapsed = {this.state.collapsed}/>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {/* 路由配置 */}
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/category' component={Category} />
              <Route path='/product' component={Product} />
              <Route path='/role' component={Role} />
              <Route path='/user' component={User} />
              <Route path='/charts/bar' component={Bar} />
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )

  }
}