import React,{Component} from "react";
import { Layout, Menu, Icon ,Avatar,Button} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const ButtonGroup = Button.Group;
import Api from "APi";
import "./default.css";
class Addlist  extends Component{
    constructor(){
       super()
        this.state={
          uaselist:[]
        }
    }
    async componentDidMount(){
       let {data}=await Api.user({

       })    
        this.setState({
          uaselist:data
        })
    }
   async romvephone(phone){
        let {uaselist}=this.state
        let {data}=await Api.deleteuser({
          phone: phone
        })
        console.log(uaselist);
      }   

    render(){
         let {uaselist}=this.state
         return <div style={{height:"100%" }}>
      <Content style={{ margin: '0 0 0  200px' }}>
      <h4>用户列表</h4>
          <div>
              {uaselist.map(item=>
                    <div className="username" key={item._id}  >
                    <div   className="usernameimg">
                          <img src={item.img?item.img:`https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png`}/>
                    </div>
                    <div className="usernameuser">
                          <h4  className="personage">用户名:{item.phone}</h4>
                    </div>
                    <div className="usernameuser">
                          <h4  className="personage">用户编号:{item._id}</h4>
                    </div>

                    <div className="usernamebutton">  
                          <ButtonGroup>
                                <Button  type="danger"  onClick={this.romvephone.bind(this,item.phone)}   >
                                    下线该用户  <Icon type="close-square" />
                                </Button>
                        </ButtonGroup>
                    </div>
                  </div>
              )}
              </div>
      </Content>
   </div>
    }
}

export default Addlist