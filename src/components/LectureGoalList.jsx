import React from 'react';

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
  { index, item } // destructuring assign(뜯어내기) : 자바스크립트 비구조화  // "props" → "({idx, item})"
) => {
  return (
    <li key={index}>
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
        {props.items.map((item, index) => (
          <ListItem index={index} item={item} />
        ))}
        <li>1. React 개발에 필요한 환경을 구축한다.</li>
        <li>2. 새로운 자바스크립트 문법을 익힌다.</li>
        <li>3. 개발 편의를 위한 VSCode IDE를 익힌다.</li>
      </ul>
    </div>
  );
};

export default LectureGoalList;
