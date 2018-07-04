import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');
const TIME_FORMAT = 'A hh:mm';
class Timer extends Component {
  constructor(props) {
    console.log('1111', props);
    super(props); // super를 호출한 다음에, 클래스에 담는 변수인 멤버변수 this를 쓸 수 있음.

    this.state = {
      date: moment(),
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment(),
      });
    }, 1000);

    console.log('6666666', this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevDateStr = this.state.date.format(TIME_FORMAT);
    const nextDateStr = nextState.date.format(TIME_FORMAT);
    return prevDateStr !== nextDateStr;
  }

  handleTick = () => {
    console.log(1);
    this.forceUpdate(); // 강제 업데이트 하는 방법으로 하거나, shouldComponentUpdate로 update할 것인지 말것인지(true / false)를 정한다.
  };

  render() {
    console.log('render...');
    const { expireDate, onComplete } = this.props;
    const { date } = this.state;

    if (moment(expireDate) < date) {
      setTimeout(() => {
        onComplete && onComplete();
      }, 1000); // 1초

      return <div>종료 되었습니다.</div>;
    }

    return (
      <div>
        <div>현재시간: {date.format(TIME_FORMAT)} </div>
        <div>{moment(expireDate).fromNow()} 에 강의 종료합니다.</div>
      </div>
    );
  }

  componentWillMount() {
    if (this.nTimer) {
      clearInterval(this.nTimer);
      this.nTimer = null;
    }
  }
}
export default Timer;
