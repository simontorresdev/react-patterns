import React from 'react';

export const List = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(([ key, description ]) => 
        <li key={key}>
          <strong>{key}:</strong> {description}
        </li>
      )}
    </ul>
  );
};