
import React,{ Component } from 'react';
// import { Button , message } from 'antd';
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import login from './pages/login/index';
import Admin from './pages/admin/admin';


export default class App extends Component{
  render(){
    return  (
      <BrowserRouter>
      <Switch>
      <Route path='/login' component={login}/> 
      <Route path='/' component={Admin} />
      </Switch>
      </BrowserRouter>
    )
  }
}
