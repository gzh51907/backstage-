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
      return <div style={{height:"100%" }}>
      <Layout style={{ marginLeft: 200 }}>
            <div className="demo-infinite-container">
             <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={this.handleInfiniteOnLoad}
                hasMore={!this.state.loading && this.state.hasMore}
                useWindow={false}
                 >
                          <List   dataSource={this.state.data}   
                          renderItem={item => (
                                <List.Item key={item._id}  id={item.goodsId}  >
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
                    {this.state.loading && this.state.hasMore && (
                      <div className="demo-loading-container">
                        <Spin />
                      </div>
                    )}
               </InfiniteScroll>
         
                </div>
       </Layout>
   </div>
    }
}

export default Addlist