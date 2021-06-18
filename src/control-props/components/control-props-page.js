import React, { useState } from 'react';
import { FinalLikeButton } from './final-like-button';

import {LikeButton} from './like-button';

export const ControlPropsPage = () => {
  const [counter, setCounter] = useState(0);

  const handleUpdateCounter = () => {
    setCounter(counter + 5);
  };

  return (
    <>
      <h2>Ejemplo sin Control Props</h2>
      <LikeButton />
      <hr />
  
      <h2>Ejemplo con Control Props</h2>
      <FinalLikeButton value={counter} setValue={handleUpdateCounter} />
    </>
  );
};