import React, { Component } from 'react'
import { 
  Card , 
  Button, 
  // Icon, 
  Table, 
  message, 
  Modal ,
  onFinish,
} from "antd";
import { reqCategorys, reqUpdateCategory, reqAddCategory } from "../../api";
import AddUpdateForm from './add-update-form'
export default class Category extends Component {

  
  render() {


    return (
      <Card
      //  extra={extra} 
       style={{ width: '100%' }}>
        <Table

        />
        <Modal>
        </Modal>

      </Card>
    )
  }
}