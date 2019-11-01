import React,{Component} from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Goodslist  extends Component{
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
                    <h1>商品修改</h1>
                </div>
              </Content>
        </Layout>
   </div>
    }
}

export default Goodslist