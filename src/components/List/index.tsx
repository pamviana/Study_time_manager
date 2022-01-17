import React, { Component } from "react";
import style from './List.module.scss';

function List() {
  const assignments = [
    {
      assignment: "React",
      time: "02:00:00",
    },
    {
      assignment: "JavaScript",
      time: "01:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2> Studies of the Day</h2>
      <ul>
        {assignments.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.assignment}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
