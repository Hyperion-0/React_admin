import React, { Component } from 'react'
import {
  Card,
  Button,
  // Icon, 
  Table,
  message,
  Modal,
  onFinish,
} from "antd";
import { reqCategorys, reqUpdateCategory, reqAddCategory, reqLogin } from "../../api";
import AddUpdateForm from './add-update-form'
import { Value } from 'sass';
export default class Category extends Component {



  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      categorys: [],
      showStatus: 0, //0 不显示，1 显示添加，2 显示修改
    }
  }

  initColumns = () => {

    this.columns = [
      {
        title: '分类的名称',
        dataIndex: 'name'
      },
      {
        title: '操作',
        width: '300',
        render: (category) => <Button type='primary' onClick={() => {

          this.category = category; //保存当前分类数据  供其他地方使用

          this.setState({
            showStatus: 2
          })
        }}>修改分类</Button>


      }
    ]
  }


  getCategorys = async () => {
    const res = await reqCategorys();
    // console.log(res)
    if (res.status === 0) {
      this.setState({
        categorys: res.data
      })
    } else {
      message.error('获取分类列表失败')
    }
  }

  componentWillMount() {
   this.initColumns()
  }

  componentDidMount() {
    this.getCategorys();
  }

  handleok = () => {
    // console.log(this.myForm.current.validateFields)
    this.myForm.current.validateFields().then((err,values)=>{
console.log(err,values)
    })

  }
  handleCancel = () => {
    this.setState({
      showStatus: 0
    })
  }
q
  render() {
    


    const extra = (
      <Button type='primary'
        onClick={() => {
          this.category = {}
          this.setState({
            showStatus: 1
          })
        }}
      >
        添加
      </Button>)

    const category = this.category || {}

    return (
      <Card

        extra={extra}
        style={{ width: '100%' }}>
        <Table
          columns={this.columns}
          dataSource={this.state.categorys}
          rowKey='_id'
          pagination={{ defaultPageSize: 2, showQuickJumper: true }}
        />

        <Modal
          title={this.state.showStatus === 1 ? '添加分类' : '修改分类'}
          visible={this.state.showStatus !== 0}
          onOk={this.handleok}
          onCancel={this.handleCancel}
        >
          <AddUpdateForm categoryName={category.name} setMyForm={(myForm)=>{this.myForm=myForm}} >

          </AddUpdateForm>
        </Modal>

      </Card>
    )
  }
}