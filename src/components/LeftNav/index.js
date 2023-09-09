import React, { Component } from 'react'
import { Link,withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
// import Logo from '../../assets/images/logo192.png';
import './index.less'
import menuList from '../../config/menuConfig';

const { Sider } = Layout;
const { SubMenu } = Menu;
 class LeftNav extends Component {
  /*
  根据指定菜单数据列表产生<Menu>的子节点数组
  使用 reduce() + 递归
  */
  getMenuNodes2 = (menulist) => {
    return menulist.reduce((pre, item) => {
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        ))
      } else {
        pre.push((
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>
                  {item.title}
                </span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        ))
      }
      return pre;
    }, [])
  }

  /* 
    根据指定菜单数据列表产生<Menu>的子节点数组
    使用map()+递归
  */
  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>
                  {item.title}
                </span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }

  componentWillMount() {
    this.menuNodes = this.getMenuNodes2(menuList);
  }

  render() {
    let defaultKey = this.props.location.pathname;
    console.log(defaultKey)


    return (
      <Sider collapsible collapsed={this.props.collapsed}>
        <div className='leftnav'>
          <div 
          className="logo"
          >
            <Link to='/home' className='left-nav-link'>
              {/* <img src={Logo} alt="" /> */}
              <h1></h1>
            </Link>
            <Menu theme="dark" 
            defaultSelectedKeys={[defaultKey]} 
            mode="inline"
            // defaultOpenKeys={{this.openKey}}
            >
              {this.menuNodes}
            </Menu>
          </div>
        </div>
      </Sider>

    )
  }
}
export default withRouter(LeftNav)