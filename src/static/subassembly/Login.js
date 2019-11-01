import React,{Component} from "react";
import { Form, Input, Button, Checkbox, Icon, Modal, message } from 'antd';
class Login  extends Component{
    state={
          usrename:"",
    }
    handleGetInputValue =(event)=>{
       this.setState({
            usrename:event.target.value,
         })
    }
    password =(event)=>{
        this.setState({
             password:event.target.value,
          })
     }
    handlePost =()=>{
        const {usrename,password} = this.state;
          console.log(usrename  ,password);
    }
    render(){      
         return <div style={{height:"100%"}}>
             <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: 300, margin: 'auto' }}>
                 <p style={{ fontSize: '20px', lineHeight: '20px', marginBottom: '30px' }}>登录安乐窝后台管理系统</p>
             <Form.Item>
                <Input value={this.state.usrename}   onChange={this.handleGetInputValue}     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号"  />
            </Form.Item>  
            <Form.Item>
                    <Input  value={this.state.password}  onChange={this.password}    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  type="password" placeholder="密码"  />
            </Form.Item>
            <Form.Item> 
                    <Checkbox  checked={true}  style={{ color: '#000' }}>记住我</Checkbox>
                    <Button type="primary" onClick={this.handlePost}  htmlType="submit" className="login-form-button" style={{ width:'100%' }}> 登录</Button>
          </Form.Item>
         </Form> 
   </div>
    }



}

export default Login