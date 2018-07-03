import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const goals = [
  '1. React 개발에 필요한 환경을 구축한다.',
  '2. 새로운 자바스크립트 문법을 익힌다.',
  '3. 개발 편의를 위한 VSCode IDE를 익힌다.',
];

const LectureGoalList = props => {
  console.log(props);

  return (
    <div>
      <div>{props.title}</div>
      <ul>
        {props.items.map((item, idx) => <li key={idx}>{item}</li>)}

        <li>1. React 개발에 필요한 환경을 구축한다.</li>
        <li>2. 새로운 자바스크립트 문법을 익힌다.</li>
        <li>3. 개발 편의를 위한 VSCode IDE를 익힌다.</li>
      </ul>
    </div>
  );
};

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     x: 1
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    console.log(this.state.x);
  };

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
