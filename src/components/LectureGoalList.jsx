import React, { Component } from 'react';

const styles = {
  textAlign: 'left',
  padding: '20px',
  border: '1px solid #ccc',
  margin: '5px',
};

const ulStyles = {
  listStyle: 'none',
};

const ListItem = (
  { idx, item } // destructuring : 자바스크립트 비구조화  // "props" → "({idx, item})"
) => {
  return (
    <li key={idx}>
      <label>
        <input type="checkbox" />
        {item}
      </label>
    </li>
  );
};

const LectureGoalList = props => {
  console.log(props);

  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => <ListItem idx={idx} item={item} />)}
        <li>1. React 개발에 필요한 환경을 구축한다.</li>
        <li>2. 새로운 자바스크립트 문법을 익힌다.</li>
        <li>3. 개발 편의를 위한 VSCode IDE를 익힌다.</li>
      </ul>
    </div>
  );
};

export default LectureGoalList;
