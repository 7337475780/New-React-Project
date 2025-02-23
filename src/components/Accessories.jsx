import React from 'react';
import Card from './Cards';
import { remotes } from '../productsList';

const Appliances = () => {
  return (
    <div id='accessories'>
      <Card products={remotes} />
    </div>
  )
}

export default Appliances
