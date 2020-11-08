import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as _ from 'lodash';
import {
  add,
  remove,
  complete
} from './todosSlice';
import styles from './Todos.module.css';
import {selectTodos} from "../todos/todosSlice";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className={styles.todoList}>
      {
        _.map(todos, (todo) => {
          const { id, title, isComplete } = todo;
          const styleClass = isComplete ? styles.todoComplete : styles.todoNormal;
          return (
            <div className={`${styles.todo} ${styleClass}`} key={id}>
              <label htmlFor={`${id}`} className={styles.container}>{title}
                <input
                  id={`${id}`}
                  type={'checkbox'}
                  value={id}
                  onClick={() => dispatch(complete(todo))}/>
                  <span className={styles.checkmark}></span>
              </label>
            </div>
          );
        })
      }
    </div>
  );
}
