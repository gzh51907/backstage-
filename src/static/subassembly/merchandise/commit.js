import React, { Component } from "react";
import { Upload, Form, Input, Select, Icon, Button } from "antd";
import "./commit.scss";
import axios from "axios";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
class Goodlist extends Component {
  state = {
    imageUrl: '',
    loading: false,
    imgurl: ''
  }
  handleChange = info => {
    console.log(info);
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      let imgurl = info.file.response.data.filename;
      // console.log(imgurl);
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
          imgurl
        }),
      );
    }
  }
  commitData = () => {
    console.log(this.props.form.getFieldsValue());
    let uploadData = this.props.form.getFieldsValue();
    if (uploadData.brandname && uploadData.goodsname && uploadData.price && uploadData.selectMultiple) {
      // console.log(6666);
      let packages = uploadData.selectMultiple.map((item, idx) => ({
        id: idx * 1 + 1,
        name: item
      }));
      let query = {
        brandId: Date.now(),
        brandName: uploadData.brandname,
        cateId: 335,
        cateName: '地砖',
        floatPrice: '0.00',
        floatPriceUnit: '元/片',
        goodsId: Date.now() + 1,
        goodsName: uploadData.goodsname,
        img: `http://47.98.245.185:12345/static/${this.state.imgurl}`,
        jingle: '',
        marketPrice: '348.000',
        packages,
        price: uploadData.price,
        priceType: 2,
        saleNum: 440,
        skuId: Date.now() + 2,
        spec: '',
        specString: "类别: 抛釉砖;地砖尺寸: 600*1200",
        scheduling: 1,
        unit: '片',
        timing: 0,
        afterTimingState: null
      }
      let { data } = axios.post('http://localhost:1998/goodinf', {
        query
      });
      // console.log(data);
      this.props.history.push('/addlist');
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { imageUrl } = this.state;
    // console.log(imageUrl);
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传图片</div>
      </div>
    );
    return <div className="goodlist">
      <Form.Item
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 18 }}
        label="商品名称"
      >
        {getFieldDecorator('goodsname', {
          rules: [
            {
              required: true,
              message: '请输入商品名',
            },
          ],
        })(<Input placeholder="请输入商品名" />)}
      </Form.Item>
      <Form.Item
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 18 }}
        label="商品品牌"
      >
        {getFieldDecorator('brandname', {
          rules: [
            {
              required: true,
              message: '请输入品牌名',
            },
          ],
        })(<Input placeholder="请输入品牌名" />)}
      </Form.Item>
      <Form.Item
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 18 }}
        label="商品价格(元)"
      >
        {getFieldDecorator('price', {
          rules: [
            {
              required: true,
              pattern: new RegExp(/^[1-9]\d*$/, "ig"),
              message: '请输入数字',
            }
          ],
        })(<Input placeholder="请输入价格" />)}
      </Form.Item>
      <Form.Item
        label="标签[多选]"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 18 }}
      >
        {getFieldDecorator('selectMultiple', {
          rules: [
            { required: true, message: '请选择你的标签', type: 'array' },
          ],
        })(
          <Select mode="multiple" style={{ width: '100%' }} placeholder="请选择商品标签">
            <Select.Option value="主材包">主材包</Select.Option>
            <Select.Option value="整装包">整装包</Select.Option>
            <Select.Option value="拎包入住">拎包入住</Select.Option>
          </Select>,
        )}
      </Form.Item>
      <Upload
        name="gd"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="http://localhost:1998/goodinf/pic"
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <Button size="large" type="primary" onClick={this.commitData}>上传</Button>
    </div >
  }
}

export default Form.create()(Goodlist);