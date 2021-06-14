import React, {useState} from 'react';
import { List } from './List';
import { ListPattern } from './ListPattern';

export const RenderPropsPage = () => {
  const [definitions] = useState({
    "name": "Frank",
    "last-name": "Zappa",
  });

  return(
    <>
      <h2>Ejemplo sin Render Props</h2>
      <List data={definitions} />
      <hr />
      <h2>Ejemplo con Render Props</h2>
      <ListPattern 
        data={definitions} 
        render={({key, description}) => (
          <>
            {key}: <strong>{description}</strong>
          </>
        )}
      />
    </>
  );
};