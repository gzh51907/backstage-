import React,{Component} from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class Default  extends Component{
    constructor(){
       super()
        this.state={}
    }
    render(){
         return <div style={{height:"100%" }}>
      <Content style={{ margin: '24px 16px 0' }}>
        <div  className="defaulit_Box"    style={{ padding: 24, background: '#fff', minHeight: 360,marginLeft:200,height:1000}}>欢迎光临</div>
      </Content>
   </div>
    }
}

export default Default