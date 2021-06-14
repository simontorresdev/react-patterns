import React from 'react';
import { Button } from './normal-button';
import { CustomButton } from './custom-button';

export const ExtensibleStylesPage = () => (
  <>
    <h2>Extensible Styles</h2>
    <h2>Ejemplo sin Extensible Styles</h2>
    <Button type="button">Click</Button>
    <hr />

    <h2>Ejemplo con Extensible Styles</h2>
    <CustomButton 
      type="button" 
      className='btn btn-success' 
      style={{ color: '#000'}}
    >
      Click
    </CustomButton>
  </>
);
