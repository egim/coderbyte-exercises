// There is a React template. Your goal is to display an unordered list (UL)
// with list items (LI) within it. The content of each list item should contain
// two spans (SPAN), one with the name and the other with the age passed in to
// the DataList function. The span elements should be separated by a single space.

// Submit your code once it is complete and our system will validate your output.

import React from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  const people = props.data.map((person) =>
    <li><span>{person.name}</span> <span>{person.age}</span></li>
  );

  return (
    <ul>{people}</ul>
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('root')
);
