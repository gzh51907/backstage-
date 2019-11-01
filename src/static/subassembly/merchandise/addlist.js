import React,{Component} from "react";
import { Layout, Menu, Icon,List, message, Avatar, Spin ,Button} from 'antd';
const ButtonGroup = Button.Group;
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
const fakeDataUrl = 'http://10.3.133.73:1907/goods/list'
import './addlist.css'
class Addlist  extends Component{
        state = {
          data: [],
          loading: false,
          hasMore: true,
        };

   componentDidMount() {
     window.addEventListener("scroll", this.handleScroll );
          this.fetchData(res => {
            console.log(res);
            
            this.setState({
                data: res.data,
            });
          });
        }


   handleInfiniteOnLoad = () => {
          let { data } = this.data;         
          this.setState({
            loading: true,
          });

          if (data.length > 14) {
            message.warning('Infinite List loaded all');
            this.setState({
              hasMore: false,
              loading: false,
            });
            return;
          }
          this.fetchData(res => {
            data = data.concat(res.data);
            this.setState({
              data,
              loading: false,
            });
          });
        };




        handleScroll = () => {
              console.log(this.refs.add);
                // console.log(this.refs.tygs.childNodes[this.refs.tygs.childNodes.length - 1]);
        //         var scrollTop = document.documentElement.scrollTop;
        //         var offsetTop = this.refs.tygs.childNodes[this.refs.tygs.childNodes.length - 1].offsetTop;
        //          console.log(scrollTop + 350, offsetTop);
        //         if (scrollTop + 350 >= offsetTop) {
        //             clearTimeout(this.state.timer);
        //             this.setState({
        //                 timer: setTimeout(async () => {
        //                     let page = this.state.page;
        //                     this.setState({
        //                         page: page + 1
        //                     });
        //                     let { data: { data: newdata } } = await axios.get('http://localhost:1907/goods/tyg', {
        //                         params: {
        //                             num: 9,
        //                             page: this.state.page
        //                         }
        //                     });
        //                     let olddata = this.state.datas;
        //                     newdata.forEach(item => {
        //                         olddata.push(item);
        //                     })
        //                     this.setState({
        //                         datas: olddata
        //                     });
        //                     console.log(this.state.datas)
        //                 }, 1000)
        //             });
        //         }
            }
      
  fetchData = callback => {
           reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {            
                 callback(res);
            },
       });
    };
  // 对应id删除
    renmoid(id){
      console.log("123" ,id );
  

    }



    componentWillUnmount() {
              window.removeEventListener("scroll", this.handleScroll);
          }

render(){

      let {data}=this.state
      return <div style={{height:"100%" }}>
      <Layout style={{ marginLeft: 200 }}>
            <div  className="demo-infinite-container">
          <ul  refs="add" >    
              <List  dataSource={this.state.data}   
                     renderItem={item => (
                             <List.Item   key={item._id}  >
                               <List.Item.Meta
                                    avatar={
                                      <img src={item.img} style={{width:80}}   />
                                    }
                                    title={<p href="https://ant.design">{item.goodsName}</p>}
                                    description={item.email}
                                  />
                                      <div>     
                                         <Button type="primary">
                                              修改
                                        </Button>
                                         <Button type="danger"  onClick={this.renmoid.bind(this,item._id)}  >
                                             删除
                                        </Button>  
                                        </div>
                                </List.Item>
                              )}
                            > 
                              {this.state.loading && this.state.hasMore && (
                                <div className="demo-loading-container">
                                <Spin />
                                </div>
                                )}
                        </List>   
                       </ul>
                </div>
       </Layout>
   </div>
    }
}

export default Addlist