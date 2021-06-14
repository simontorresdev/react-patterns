import React from 'react';
import { useFetch } from '../hooks/useFetch';

const apiBaseUrl = 'https://api.github.com';

const url = `${apiBaseUrl}/orgs/facebook/repos?sort=created`;

export const CustomHookDevelopero = () => {

  const { data, isFetching, error } = useFetch(url);

  if (isFetching) {
    return 'Loading...';
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return data.map(({name, html_url}) => (
    <div key={html_url}>
      <p>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
    </div>
  ));
};