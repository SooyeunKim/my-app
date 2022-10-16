import React from 'react';
import Page from './Map.html';
var mapDoc = {__html: Page};

const SearchMap = () => {
    return (<div dangerouslySetInnerHTML={mapDoc} />)
  };
  
  export default SearchMap;