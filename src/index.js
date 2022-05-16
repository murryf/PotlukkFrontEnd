import React from 'react';
import ReactDOM from 'react-dom/client';
// import ItemViewerPage from './components/item-viewer-page';
import ManagerPage from './components/manager-page';
// import PotluckViewerPage from './components/potluck-viewer-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Stellar Potlukk App</h1>
    
    <ManagerPage/>
  </React.StrictMode>
);


