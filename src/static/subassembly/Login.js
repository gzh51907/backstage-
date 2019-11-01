import React,{Component} from "react";
import { Form, Input, Button, Checkbox, Icon, Modal, message } from 'antd';
class Login  extends Component{
    state={
          usrename:"",
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render(){     
        const { getFieldDecorator } = this.props.form;         
         return <div style={{height:"100%"}}>
             <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: 300, margin: 'auto' }}>
                 <p style={{ fontSize: '20px', lineHeight: '20px', marginBottom: '30px' }}>登录安乐窝后台管理系统</p>
             <Form.Item>
             {getFieldDecorator('username', {
            rules: [{ required: true, message: '用户名不能为空呦' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
            </Form.Item>  
            <Form.Item>
            {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
            </Form.Item>
            <Form.Item> 
                        {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住我</Checkbox>)}
                    <Button type="primary" onClick={this.handlePost}  htmlType="submit" className="login-form-button" style={{ width:'100%' }}> 登录</Button>
          </Form.Item>
         </Form> 
   </div>
    }



}

export default   Form.create()(Login); 