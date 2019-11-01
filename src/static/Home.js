import React,{Component} from 'react';
import { HashRouter,BrowserRouter,Route, Redirect,Switch, Link, NavLink, withRouter} from 'react-router-dom';
import { Layout, Menu, Icon , Avatar,Breadcrumb} from 'antd';
const { Header, Sider } = Layout;
const { SubMenu } = Menu;
import Default from "~/default.js";
import  GoodList from '~/merchandise/commit.js'
import Addlist from "~/merchandise/addlist.js";
import userlist from "~/userlist/username.js";
import  Adduser from "~/userlist/adduser.js";
@withRouter
class Home extends Component{
    state = {
        collapsed: false,
        current: '/default',
     usermane:[{    
             path: '/username',
             text: "查询用户",
             name: 'usermane',
             type:"user",
         },
         {
            path: '/adduser',
            text: '添加用户',
            name: 'adduser',
            type:"user-add"

         }],
     goodslist:[{
            path: '/goodslist',
            text: '商品查询',
            name: 'goodslist',
            type:"search"
        },{
            path: '/addlist',
            text: '商品修改',
            name: 'addlist',
            type:"file-done"
        }]
    }
      goto =(path)=>{    
        this.props.history.push(path)
    }
    changeMenu = ({ key }) => {
        this.setState({ current: key });
        this.goto(key);
    }


    render() {
       let {goodslist,usermane}=this.state
        return (
            <div>
             <Layout>
                <Sider
                  style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0, }} >
                                <div className="logo" />
                                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
                                 onClick={this.changeMenu} >        
                           <SubMenu key="sub2" title={ <span> <Icon type="shopping" /><span>商品设置</span></span>}>
                                    {goodslist.map(item=>{
                                     return <Menu.Item key={item.path}>
                                                  <Icon type={item.type}/> {item.text} 
                                        </Menu.Item>
                                      })}
                          </SubMenu>
                          <SubMenu key="sub3" title={ <span> <Icon type="solution" /><span>用户设置</span></span>}>
                                    {usermane.map(item=>{
                                     return <Menu.Item key={item.path}>
                                                  <Icon type={item.type}/> {item.text} 
                                        </Menu.Item>
                                      })}
                          </SubMenu>



                        </Menu>
                    </Sider>
                  <Layout style={{ marginLeft: 200 }}>
                            <Header style={{ background: '#fff',overflow: "hidden"}} >
                             <p style={{float:'left',fontWeight: "bold",fontSize:24  }} > 安乐窝后台管理系统 </p>
                                    <div  style={{float:'right'}}>
                                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />     
                                          <span> 个人</span>
                                    </div>
                            </Header>
                    </Layout>
            </Layout>
                <Switch>
                    <Route path="/default" component={Default} />
                     <Route path="/goodslist" component={GoodList} exact />  
                     <Route path="/addlist" component={Addlist} />
                     <Route path="/username" component={userlist} />
                     <Route path="/adduser" component={Adduser} />
                    <Redirect from="/" to="/default" exact />
               </Switch>
            </div>
        )
    }
}


export default Home;


