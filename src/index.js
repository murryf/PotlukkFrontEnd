import React from 'react';
import ReactDOM from 'react-dom/client';
// import CSS
import './index.css'
// import ItemViewerPage from './components/item-viewer-page';
import ManagerPage from './components/manager-page';
// import PotluckViewerPage from './components/potluck-viewer-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ManagerPage/>
  </React.StrictMode>
);
