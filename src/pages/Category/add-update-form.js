import React,{Component,forwardRef} from "react";
import {Form,Input} from "antd"

export default class  AddUpdateForm extends Component{
    myForm = React.createRef(); 
    
    
    UNSAFE_componentWillMount(){
        this.props.setMyForm(this.myForm)       
    }

    
    render(){
        
        // const {categoryName} =this.props;
        


        return(
            <Form   ref={this.myForm}>
                <Form.Item
                name='categoryName'
                // {categoryName}
               rules={[
                {
                required:true,
                message:'分类名称必须输入'}
               ]}
                >
                <Input type="text" placeholder='请输入分类名称'   />
                </Form.Item>
            </Form>
        )
    }
}

// //antd4无法使用create()
// export default Form.forwardRef()(AddUpdateForm);