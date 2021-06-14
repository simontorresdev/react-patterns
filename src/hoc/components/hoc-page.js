import React from 'react';
import {NormalForm} from './normal-form';
import { MyFormControlled } from './form-with-hoc';

export const HocPage = () => {
  const handleNormalSubmit = data => alert(data);
  const handleNormalSubmit2 = data => alert(JSON.stringify(data));
  return (
    <>
      <h2>Ejemplo sin High Order Component (HOC)</h2>
      <NormalForm onSubmit={handleNormalSubmit} />

      <hr />

      <h2>Ejemplo con High Order Component (HOC)</h2>
      <MyFormControlled onSubmit={handleNormalSubmit2} />
    </>
  );
};