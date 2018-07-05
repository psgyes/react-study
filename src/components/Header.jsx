import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isComment: 'Welcome to React',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log(this.state);

    if (this.state.isToggleOn === true) {
      this.setState({
        isToggleOn: false,
        isComment: 'Stop React',
      });
    } else {
      this.setState({
        isToggleOn: true,
        isComment: 'Welcome to React',
      });
    } // 방법 1

    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // })); // 방법 2 (고급)
  };

  render() {
    const { isToggleOn } = this.state;
    const { isComment } = this.state;
    // console.log(isToggleOn);
    return (
      <div>
        <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className={isToggleOn ? 'App-logo rotate' : 'App-logo'}
            alt="logo"
          />
          <h1 className="App-title">{isComment}</h1>
        </header>
      </div>
    );
  }
}

export default Header;
