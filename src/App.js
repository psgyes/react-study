import React, { Component } from 'react';
import LectureGoalList from './components/LectureGoalList'; // customizing
import logo from './logo.svg';
import './App.css';

const goals = [
  'React 개발에 필요한 환경을 구축한다.',
  '새로운 자바스크립트 문법을 익힌다.',
  '개발 편의를 위한 VSCode IDE를 익힌다.',
];

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     x: 1
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick = () => { // this 를 쓸거면, arrow function(=>)을 써줘야 binding되서 쓸수 있다.(그냥 써...)
  //   console.log(this.state.x);
  // };
  handleClick = (a, b, c) => {
    // this 를 쓸거면, arrow function(=>)을 써줘야 binding되서 쓸수 있다.(그냥 써...)
    console.log(this, a, b, c, arguments);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            onClick={this.handleClick}
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to React (edited by yong tae)</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title={'강의목표!'} />
      </div>
    );
  }
}

export default App;
