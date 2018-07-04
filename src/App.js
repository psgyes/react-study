import React, { Component } from 'react';
import LectureGoalList from './components/LectureGoalList'; // customizing
import Timer from './components/Timer'; // customizing
import moment from 'moment'; // customizing
import logo from './logo.svg';
import './App.css';

const goals = [
  'React 개발에 필요한 환경을 구축한다.',
  '새로운 자바스크립트 문법을 익힌다.',
  '개발 편의를 위한 VSCode IDE를 익힌다.',
  '기본적인 Git 사용법을 익힌다.',
  'PR 코드 리뷰를 응용한 개발 프로세스를 만든다.',
];

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     x: 1
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // } // 이렇게 하는거를 , arrow function을 써주면 된다.

  // handleClick = () => { // this 를 쓸거면, arrow function(=>)을 써줘야 binding되서 쓸수 있다.(그냥 써...)
  //   console.log(this.state.x);
  // };

  // handleClick = (a, b, c) => {
  //   console.log(this, a, b, c, arguments);
  // }

  handleClick = e => {
    debugger; // 1. 크롬 개발자 도구: F12 개발자도구를 열고 그림을 클릭하면, debugger에서 멈춤.
    // 2. VS Code 디버그: F9로 디버그 시점을 지정하고 F5로 디버그 시작
    console.log(this, e);
  };

  state = {
    isExpired: false,
  };

  handleComplete = () => {
    // 자식이 종료되고 1초 후에 Complete 되게...

    this.setState({ isExpired: true });
    console.log('타이머로부터 호출받음...');
  };

  render() {
    // const isExpired = moment('2018-07-04T17:00:00+09:00') < moment(); // isExpired라는 플래그를 둬서 부모입장에서 제어 가능. (좋은 코딩은 아님) // shouldcomponentupdate 라는 자식이 계산해서 알아서 끝내게 할수도 있음.
    const { isExpired } = this.state;

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

        {!isExpired && (
          <Timer
            expireDate={'2018-07-04T16:15:00+09:00'}
            onComplete={this.handleComplete}
          />
        )}
      </div>
    );
  }
}

export default App;
