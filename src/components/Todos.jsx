import React, { Component } from 'react';
import { Checkbox, Input, Icon } from 'antd';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: props.items,
      text: '',
      // isToggleOn: true,
      // isComment: 'Welcome to React',
    };
    //console.log(this.state);

    //this.handleClick = this.handleClick.bind(this);
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handledelTodoItem = this.handledelTodoItem.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleAddTodoItem() {
    this.state.member.push({ title: this.state.text, completed: true });
    // this.setState(this.state); // mutable 방식 (X)
    this.setState({
      member: [...this.state.member],
    }); // mutable 방식 (O)
    //console.log(this.state.member);
  }

  handledelTodoItem(value) {
    console.log(value);
    var index;
    for (var i = 0; i < this.state.member.length; i++) {
      if (this.state.member[i].title == value) {
        // delete this.state.member[i]; // 이렇게 delete하는 문법은 없음.
        this.state.member = this.state.member.splice(i, 1);
        // this.state.member.remove(i);
        index = i;
      }
    }
    this.setState({
      // member: [
      //   ...this.state.member.slice(0, index),
      //   ...this.state.member.slice(index + 1),
      // ],
      member: [...this.state.member],
    });
    console.log(this.state.member);
  }

  handledelTodoAllItem(v) {
    for (var i = 0; i < this.state.member.length; i++) {
      //console.log(this.state.member[i].title);
      this.state.member = this.state.member.splice(i, 1);
    }
    this.setState({
      member: [...this.state.member],
    });
    //console.log(this.state.member);
  }

  ListItem = ({ title, completed }) => (
    <li>
      <Icon
        type="close-square"
        onClick={this.handledelTodoItem.bind(this, title)}
      />
      <Checkbox defaultChecked={completed}>{title}</Checkbox>
    </li>
  );

  render() {
    const { title } = this.props;
    const { items } = this.props;
    return (
      <div className="Todos">
        <div>{title}</div>
        <Input
          style={{ width: '100%', textAlign: 'center' }}
          onChange={this.handleChange}
          onPressEnter={this.handleAddTodoItem}
        />
        <ul>
          {items.map((item, idx) => <this.ListItem key={idx} {...item} />)}
          <button onClick={this.handledelTodoAllItem.bind(this)}>
            All Delete
          </button>
        </ul>
      </div>
    );
  }
}
// const Todos = props => (
//   <div className="Todos">
//     <div>{props.title}</div>
//     <Input style={{ width: '20', textAlign: 'center' }} onPressEnter />
//     <ul>{props.items.map((item, idx) => <ListItem key={idx} {...item} />)}</ul>
//   </div>
// ); // 중괄호는 return을 해야함.
export default Todos;
