import React,{Component} from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Default  extends Component{
    constructor(){
       super()
        this.state={
        }
    }
    render(){
         return <div style={{height:"100%" }}>
      <Layout style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            <h1>欢迎来到安乐窝</h1>
        </div>
      </Content>
    </Layout>
   </div>
    }
}

export default Default