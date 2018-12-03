import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile';

import Logo from '../logo';

const Item = List.Item;

class Login extends Component {
  state = {
    laoban: true,
    username: '',
    password: '',
    rePassword: ''
  }
  
  
  
  handleChange = (type, value) => {
    //更新状态
    this.setState({
      [type]: value
    })
  }
  
  login = () => {
    //收集表单数据
    const {laoban, password, rePassword, username} = this.state;
    //发送ajax
    console.log(laoban, password, rePassword, username);
  }
  
  goRegister = () => {
    this.props.history.replace('/register');
  }
  
  render () {
    const {laoban} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={val => this.handleChange('username', val)}>用户名:</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <WhiteSpace />
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.goLogin}>没有账户</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Login;