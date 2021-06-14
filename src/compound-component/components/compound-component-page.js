import React from 'react';
import {Todo} from './normal-todo';
import {FinalTodo, TodoTitle, TodoForm, TodoList} from './final-todo';

export const CompoundComponentPage = () => (
  <>
    <h2>Compound Component</h2>
    <h2>Ejemplo sin Compound Component</h2>
    <Todo title="Sin Compound Pattern :c" />
    <hr />

    <h2>Ejemplo con Compound Component</h2>
    <FinalTodo>
      <TodoTitle>
        <h2>Compound Pattern :D</h2>
      </TodoTitle>
      <TodoForm />
      <TodoList />
    </FinalTodo>
  </>
);
