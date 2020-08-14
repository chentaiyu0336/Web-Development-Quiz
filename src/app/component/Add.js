import React, { Component } from 'react';
import './Add.less';

class Add extends Component {

  state = {
    name: '',
    price: '',
    unit: '',
    photo: '',
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };
  handleUnitChange = (event) => {
    this.setState({ unit: event.target.value });
  };
  handlePhotoChange = (event) => {
    this.setState({ photo: event.target.value });
  };
  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault()
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>添加商品</h1>

        <div className="name">
          <label htmlFor="name">名称</label>
          <input type="text" placeholder="名称" value={this.state.name} onChange={this.handleNameChange} />
        </div>

        <div className="price">
          <label htmlFor="price">价格</label>
          <input type="text" placeholder="价格" value={this.state.price} onChange={this.handlePriceChange} />
        </div>

        <div className="unit">
          <label htmlFor="unit">单位</label>
          <input type="text" placeholder="单位" value={this.state.unit} onChange={this.handleUnitChange} />
        </div>

        <div className="photo">
          <label htmlFor="photo">图片</label>
          <input type="text" placeholder="URL" value={this.state.photo} onChange={this.handlePhotoChange} />
        </div>

        <input type="submit" value="提交" className="submit"
          disabled={!this.state.name || !this.state.photo || !this.state.price || !this.state.photo} />

      </form>
    );
  };
}

export default Add;