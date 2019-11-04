import React, { Component } from "react";
import Api from "APi";
import { Layout, Menu, Icon, List, message, Button } from 'antd';
const ButtonGroup = Button.Group;
import './addlist.css'
class Addlist extends Component {
  state = {
    datas: [],
    loading: false,
    hasMore: true,
    timer: null,
    page: 1
  };
  // 对应id删除
  renmoid = async (id) => {
    // console.log("123", id);
    let data = await Api.deletel({
      goodsId: id
    })
    console.log(data);
    let newdata = this.state.datas.filter(item => item.goodsId != id);
    this.setState({
      datas: newdata
    })
  }


  handleScroll = () => {
    // console.log(this.refs.tygs.childNodes[this.refs.tygs.childNodes.length - 1]);
    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    var offsetTop = this.refs.find.childNodes[this.refs.find.childNodes.length - 1].offsetTop;
    // console.log(scrollTop + 650, offsetTop);
    if (scrollTop + 650 >= offsetTop) {
      clearTimeout(this.state.timer);
      this.setState({
        timer: setTimeout(async () => {
          let page = this.state.page;
          this.setState({
            page: page + 1
          });
          let { data: newdata } = await Api.getlist({
            num: 9,
            page: this.state.page

          });
          let olddata = this.state.datas;
          newdata.forEach(item => {
            olddata.push(item);
          })
          this.setState({
            datas: olddata
          });
          console.log(this.state.datas);
        }, 1000)
      });
    }
  }
  async componentDidMount() {

    window.addEventListener("scroll", this.handleScroll);
    let { data } = await Api.getlist({
      num: 9,
      page: 1

    })
    this.setState({
      datas: data
    })


  }

  errorPic = (tygimg) => {
    this.refs[tygimg].src = "../../../action/img/Clelo.jpg";
  }



  // 在生命周期函数销毁
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    let { datas } = this.state
    return <div style={{ height: "100%" }}>
      <Layout style={{ marginLeft: 200 }}>
        <div className="demo-infinite-container" ref="find" >
          {datas.map((item, index) =>
            <div className="demo_box" key={item._id}  >
              <img src={item.img} className="demo_img" onError={this.errorPic.bind(this, ('tygimg' + index))} ref={"tygimg" + index} />
              <h4 className="deom_store">{item.brandName}</h4>
              <h4 className="deom_price">{item.price}元/张</h4>
              <div className="demo_specification">
                <p>{item.goodsName}</p>
                <p>{item.specString}</p>
              </div>
              <div className="demo_button">
                <ButtonGroup>
                  <Button type="primary">
                    <Icon type="left" />
                    修改
                              </Button>
                  <Button type="danger" onClick={this.renmoid.bind(this, item.goodsId)}   >
                    删除
                                <Icon type="close-square" />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  }
}

export default Addlist