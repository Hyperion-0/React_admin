import React, { Component } from 'react'
import { Layout,Button, Modal } from 'antd'
import storageUtils from '../../utils/storageUtil'
import memoryUtils from '../../utils/memoryUtils'
import {withRouter} from "react-router-dom"
import './index.less'
import menuList from '../../config/menuConfig'

// 区块化解构赋值
const {Header} = Layout
const {confirm} = Modal

 class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleString()
    }
  }


  logout = ()=>{
    confirm({
      title:'确定要退出登录吗?',
      content:'',
      onOk:()=>{
        storageUtils.removeUser();
        memoryUtils.user = {};
        this.props.history.replace('/login');
      },
      onCancel: () => {
        console.log('Cancel');
        
      },
    })

  }
  getTitle =()=>{
    //根据当前请求path得到对应的title
    let title = '';
    const path = this.props.location.pathname;
    menuList.forEach(item =>{
      if(item.key === path){
        title = item.title;
      }else if(item.children){
        const cItem = item.children.find(cItem=>path===cItem.key);        
        if(cItem){
            title = cItem.title;
        }
      }
    })
    return title;
  }

 // 动态显示当前时间
 componentDidMount(){
  // 开启定时器
  this.timer = setInterval(() => {
    this.setState({
      currentTime: new Date().toLocaleString()
    })
  }, 1000);
}
componentWillMount(){
  clearInterval(this.timer)
}

  render() {
    return (
      <Header  style={{background:'#fff' , padding:0}}>
        <div  className='header'>
          <h2 className='header-title'>{this.getTitle()}</h2>
          <div className='header-use'></div>
          <div className='currentTime'>{this.state.currentTime}</div>
         <div className='weather'>天气晴</div>
         <div class = 'userInfo'>
          欢迎,admin
          <Button style={{marginLeft:'20px'}} onClick={this.logout}>退出</Button>
               </div>
          <div>
          </div>
        </div>

      </Header>
    )
  }
}

export default withRouter(MyHeader)
