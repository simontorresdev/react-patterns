import React from 'react';

export const ListPattern = ({ data, render }) => {
  return (
    <ul>
      {Object.entries(data).map(([ key, description ]) => 
        <li key={key}>
          {render({ key, description })}
        </li>
      )}
    </ul>
  );
};
