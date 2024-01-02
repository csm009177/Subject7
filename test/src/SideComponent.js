import React from 'react';
import { stateData } from './data.js';

const SideComponent = () => {
  return (
    <ul id="sideUl">
      {stateData.map((item, index) => (
        <li key={index}>
          <a href={item.hash}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default SideComponent;
